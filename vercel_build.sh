#!/bin/bash

amazon-linux-extras install R4.0

# install dependencies
Rscript ./R/prepare.R

# build Rmd files
Rscript -e 'blogdown::build_site(run_hugo=FALSE, build_rmd=TRUE)'

# run hugo
hugo -b $DEPLOY_PRIME_URL --gc --minify