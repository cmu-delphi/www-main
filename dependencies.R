install.packages(c('blogdown', 'svglite'), repo="http://cran.rstudio.com/")

# blogdown::install_hugo()

devtools::install_github("cmu-delphi/covidcast", ref = "main",
                         subdir = "R-packages/covidcast")
