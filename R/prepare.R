install.packages(c('blogdown', 'svglite', 'devtools', 'gridExtra', 'reticulate'))

# blogdown::install_hugo()

devtools::install_github("cmu-delphi/covidcast", ref = "main",
                         subdir = "R-packages/covidcast")
