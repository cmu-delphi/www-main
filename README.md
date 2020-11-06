# Delphi Website

Delphi's homepage at https://delphi.cmu.edu/

This site is based on [Hugo](https://gohugo.io).

## Development Environment

1. Install Hugo: https://gohugo.io/getting-started/installing/ -> install the **extended** version.
1. run `hugo server` to create a development server
1. run `hugo server -D` to create a development server which also renders draft pages, see [Draft](https://gohugo.io/getting-started/usage/#draft-future-and-expired-content)
1. run `hugo --minify` to build a minified build in `/public`

### Blog Content

The blog pages are written in RMarkdown using [Blogdown](https://bookdown.org/yihui/blogdown). 
In order to convert the Rmd files to HTML files for Hugo you have to:

1. Install R: https://www.r-project.org/
1. Install the dependencies as defined in `/R/prepare.R`: `Rscript ./R/prepare.R`
1. Run blogdown to convert the files to HTML: `Rscript -e 'blogdown::build_site(local=TRUE, run_hugo=FALSE, build_rmd=TRUE)'`
   - `local=TRUE` similar to `-D` to process draft files
   - `run_hugo=FALSE` to manually run hugo
   - `build_rmd=TRUE` force a (re)build of the Rmd pages
1. Run Hugo server as usual

#### Developing new blog content

blogdown also has an integrated server `blogdown::serve_site()` which will render RMarkdown files on the fly and does a similar thing as `hugo server -D`
   