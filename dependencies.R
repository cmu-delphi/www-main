# install.packages(c(), repo="http://cran.rstudio.com/")
# install.packages("bookdown", repo="http://cran.rstudio.com/")

# blogdown::install_hugo()

install.packages("covidcast", repo="http://cran.rstudio.com/")
# devtools::install_github("cmu-delphi/covidcast", ref = "main",
#                          upgrade = 'never',
#                          subdir = "R-packages/covidcast")

devtools::install_github("reichlab/covidData", upgrade = 'never')
devtools::install_github("reichlab/covidHubUtils", upgrade = 'never')
