#!/bin/bash

yum install -y R

# install dependencies
Rscript ./R/prepare.R

# build Rmd files
Rscript -e 'blogdown::build_site(run_hugo=FALSE, build_rmd=TRUE)'

# run hugo
hugo -b $DEPLOY_PRIME_URL --gc --minify