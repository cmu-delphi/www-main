# Delphi Website

Delphi's homepage at https://cmu-delphi-main.netlify.app/

This site is based on [Hugo](https://gohugo.io).

## Development Environment

### Web Editor Only

1. Install Node: https://nodejs.org/en/download/
1. Run `npm install`

#### Commands

1. run `npm start` to create a development Hugo server
1. run `npm run format` to run prettier and format files
1. run `npm run build` to build a minified build in `/public`

### Blog Editor

In addition the blog is written in RMarkdown using [Blogdown](https://bookdown.org/yihui/blogdown).
In order to convert the Rmd files to HTML files for Hugo you also need to:

1. Install [Anaconda](https://www.anaconda.com) or another compatible system (miniconda,...)
1. Create a conda environment for the website: `conda env create -f environment.yml` which will install

- [R](https://www.r-project.org/)
- Python
- some dependencies for creating blog posts

1. Activate the environment: `conda activate www-main`
1. Install extra R dependencies: `Rscript ./dependencies.R`

#### Commands

1. Activate the environment: `conda activate www-main`
1. Run blogdown to convert the files to HTML: `Rscript -e 'blogdown::build_site(local=TRUE, run_hugo=FALSE, build_rmd=TRUE)'`
   - `local=TRUE` similar to `-D` to process draft files
   - `run_hugo=FALSE` to manually run hugo
   - `build_rmd=TRUE` force a (re)build of the Rmd pages
1. Alternatively, run `npm run build:blog`
1. Run Hugo server as usual

blogdown also has an integrated server `blogdown::serve_site()` which will render RMarkdown files on the fly and does a similar thing as `hugo server -D`. 
A shortcut is available through `npm run start:blog`.

#### Adding a new blog post

In case you use new dependencies don't forget to either edit `environment.yml` or `dependencies.R`.
