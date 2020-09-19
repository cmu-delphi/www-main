library(covidcast)
library(dplyr)
library(tidyr)

#### Functions #####

# Function to append shift values (lags or leads) to data frame
append_shifts = function(df, shifts) {
  # Make sure that we have a complete record of dates for each geo_value (fill
  # with NAs as necessary)
  df_all = df %>% group_by(geo_value) %>%
    summarize(time_value = seq.Date(as.Date(min(time_value)),
                                    as.Date(max(time_value)),
                                    by = "day")) %>% ungroup()
  df = full_join(df, df_all, by = c("geo_value", "time_value"))
  
  # Group by geo value, sort rows by increasing time
  df = df %>% group_by(geo_value) %>% arrange(time_value) 
  
  # Load over shifts, and add lag value or lead value
  for (shift in shifts) {
    fun = ifelse(shift < 0, lag, lead)
    varname = sprintf("value%+d", shift)
    df = mutate(df, !!varname := fun(value, n = abs(shift)))
  }
  
  # Ungroup and return
  return(ungroup(df))
}

# Some useful functions for transformations
Log = function(x, a = 0.01) log(x + a)
Exp = function(y, a = 0.01) exp(y) - a
Logit = function(x, a = 0.01) log((x + a) / (1 - x + a))
Sigmd = function(y, a = 0.01) (exp(y) * (1 + a) - a) / (1 + exp(y))
Id = function(x) x
 
# Transforms to consider, in what follows
trans = Logit
inv_trans = Sigmd

# Rescale factors for our signals: bring them all down to proportions (between
# 0 and 1)
rescale_g = 1e-2 # Originally a percentage
rescale_f = 1e-2 # Originally a percentage
rescale_c = 1e-5 # Originally a count per 100,000 people

#### Data #####

# Consider only counties with at least 200 cumulative cases by Google's end
case_num = 200
geo_values = covidcast_signal("jhu-csse", "confirmed_cumulative_num",
                              "2020-05-14", "2020-05-14") %>%
  filter(value >= case_num) %>% pull(geo_value) 

# Fetch county-level Google and Facebook % CLI-in-community signals, and JHU
# confirmed case incidence proportion
start_day = "2020-04-11"
end_day = "2020-09-01"
g = covidcast_signal("google-survey", "smoothed_cli") %>%
  select(geo_value, time_value, value) %>%
  filter(geo_value %in% geo_values) 
f = covidcast_signal("fb-survey", "smoothed_hh_cmnty_cli", 
                     start_day, end_day) %>%
  select(geo_value, time_value, value) %>%
  filter(geo_value %in% geo_values) 
c = covidcast_signal("jhu-csse", "confirmed_7dav_incidence_prop",
                     start_day, end_day) %>%
  select(geo_value, time_value, value) %>%
  filter(geo_value %in% geo_values) 

# Find "complete" counties, present in all three data signals
geo_values_complete = intersect(intersect(g$geo_value, f$geo_value),
                                c$geo_value)

# Filter to complete counties, transform the signals, append 1-2 week lags to 
# all three, and also 1-2 week leads to case rates
lags = -1:-2 * 7
leads = 1:2 * 7
g = g %>% filter(geo_value %in% geo_values_complete) %>% 
  mutate(value = trans(value * rescale_g)) %>% 
  append_shifts(shifts = lags) 
f = f %>% filter(geo_value %in% geo_values_complete) %>% 
  mutate(value = trans(value * rescale_f)) %>% 
  append_shifts(shifts = lags) 
c = c %>% filter(geo_value %in% geo_values_complete) %>%
  mutate(value = trans(value * rescale_c)) %>% 
  append_shifts(shifts = c(lags, leads))

# Rename columns
colnames(g) = sub("^value", "goog", colnames(g))
colnames(f) = sub("^value", "fb", colnames(f))
colnames(c) = sub("^value", "case", colnames(c))

# Make one big matrix by joining these three data frames
z = full_join(full_join(g, f, by = c("geo_value", "time_value")),
              c, by = c("geo_value", "time_value"))

##### Analysis #####

# Use quantgen for LAD regression (this package supports quantile regression and
# more; you can find it on GitHub here: https://github.com/ryantibs/quantgen)
library(quantgen) 

res_list = vector("list", length = length(leads)) 
n = 14 # Number of trailing days to use for training set
verbose = TRUE # Print intermediate progress to console?

# Loop over lead, forecast dates, build models and record errors (warning: this
# computation takes a while)
for (i in 1:length(leads)) { 
  lead = leads[i]; if (verbose) cat("***", lead, "***\n")
  
  # Create a data frame to store our results. Code below populates its rows in a
  # way that breaks from typical dplyr operations, done for efficiency
  res_list[[i]] = z %>% 
    filter(between(time_value, as.Date(start_day) - min(lags) + lead, 
                   as.Date(end_day) - lead)) %>%
    select(geo_value, time_value) %>%
    mutate(err0 = as.double(NA), err1 = as.double(NA), err2 = as.double(NA), 
           err3 = as.double(NA), err4 = as.double(NA), lead = lead) 
  valid_dates = unique(res_list[[i]]$time_value)
  
  for (j in 1:length(valid_dates)) {
    date = valid_dates[j]; if (verbose) cat(format(date), "... ")
    
    # Filter down to training set and test set
    z_tr = z %>% filter(between(time_value, date - lead - n, date - lead))
    z_te = z %>% filter(time_value == date)
    inds = which(res_list[[i]]$time_value == date)
    
    # Create training and test responses
    y_tr = z_tr %>% pull(paste0("case+", lead))
    y_te = z_te %>% pull(paste0("case+", lead))
    
    # Strawman model
    if (verbose) cat("0")
    y_hat = z_te %>% pull(case)
    res_list[[i]][inds,]$err0 = abs(inv_trans(y_hat) - inv_trans(y_te))
    
    # Cases only model
    if (verbose) cat("1")
    x_tr_case = z_tr %>% select(starts_with("case") & !contains("+"))
    x_te_case = z_te %>% select(starts_with("case") & !contains("+"))
    x_tr = x_tr_case; x_te = x_te_case # For symmetry wrt what follows 
    ok = complete.cases(x_tr, y_tr)
    if (sum(ok) > 0) {
      obj = quantile_lasso(as.matrix(x_tr[ok,]), y_tr[ok], tau = 0.5,
                           lambda = 0, stand = FALSE, lp_solver = "gurobi")
      y_hat = as.numeric(predict(obj, newx = as.matrix(x_te)))
      res_list[[i]][inds,]$err1 = abs(inv_trans(y_hat) - inv_trans(y_te)) 
    }
    
    # Cases and Google model
    if (verbose) cat("2")
    x_tr_goog = z_tr %>% select(starts_with("goog"))
    x_te_goog = z_te %>% select(starts_with("goog"))
    x_tr = cbind(x_tr_case, x_tr_goog)
    x_te = cbind(x_te_case, x_te_goog)
    ok = complete.cases(x_tr, y_tr)
    if (sum(ok) > 0) {
      obj = quantile_lasso(as.matrix(x_tr[ok,]), y_tr[ok], tau = 0.5,
                           lambda = 0, stand = FALSE, lp_solver = "gurobi")
      y_hat = as.numeric(predict(obj, newx = as.matrix(x_te)))
      res_list[[i]][inds,]$err2 = abs(inv_trans(y_hat) - inv_trans(y_te)) 
    }
    
    # Cases and Facebook model
    if (verbose) cat("3")
    x_tr_fb = z_tr %>% select(starts_with("fb"))
    x_te_fb = z_te %>% select(starts_with("fb"))
    x_tr = cbind(x_tr_case, x_tr_fb)
    x_te = cbind(x_te_case, x_te_fb)
    ok = complete.cases(x_tr, y_tr)
    if (sum(ok) > 0) {
      obj = quantile_lasso(as.matrix(x_tr[ok,]), y_tr[ok], tau = 0.5,
                           lambda = 0, stand = FALSE, lp_solver = "gurobi")
      y_hat = as.numeric(predict(obj, newx = as.matrix(x_te)))
      res_list[[i]][inds,]$err3 = abs(inv_trans(y_hat) - inv_trans(y_te)) 
    }
    
    # Cases, Google, and Facebook model
    if (verbose) cat("4\n")
    x_tr = cbind(x_tr_case, x_tr_goog, x_tr_fb)
    x_te = cbind(x_te_case, x_te_goog, x_te_fb)
    ok = complete.cases(x_tr, y_tr)
    if (sum(ok) > 0) {
      obj = quantile_lasso(as.matrix(x_tr[ok,]), y_tr[ok], tau = 0.5,
                           lambda = 0, stand = FALSE, lp_solver = "gurobi")
      y_hat = as.numeric(predict(obj, newx = as.matrix(x_te)))
      res_list[[i]][inds,]$err4 = abs(inv_trans(y_hat) - inv_trans(y_te)) 
    }
  }
}

# Bind results over different leads into one big data frame
res = do.call(rbind, res_list)
