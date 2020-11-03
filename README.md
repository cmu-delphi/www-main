# delphi-blog

[![Deploy Status](https://delphi.cmu.edu/~automation/public/github_deploy_repo/badge.php?repo=cmu-delphi/delphi-blog)](#)

Repo for Delphi's blog.

## Writing posts

Posts go under `content/post/`; see `2015-07-23-template-post.Rmd` there for
syntax details and how to include mathematics. If you write in RStudio and have
the blogdown package installed, it should automatically generate previews inside
RStudio.

The workflow:

1. Create a branch for your post.
2. Add a new Rmd file in `content/post/` and fill out the metadata, as shown in
   the template file. If you're not sure what tags to use, we can figure that
   out when you open a pull request to submit your post.
3. Write your post, previewing regularly to make sure it looks good. Use the
   "Addins -> Serve Site" button to open the preview if it doesn't open
   automatically.
4. When ready, use Git to commit your Rmd file. Ensure you don't commit anything
   else accidentally. You should **not** commit the contents of `public/`. We
   will generate that when publishing your post.
5. Open a pull request for review and so the post can be merged into the blog.

## Previewing the site

If RStudio site preview doesn't work for you, or you prefer to use your own
browser to preview the site, you can generate a static copy:

1. In the R console, with your working directory set to the blog's root
   directory (which contains this README), run `blogdown::build_site(local =
   TRUE)`. The `local` option ensures this preview includes draft posts.
2. When it finishes, open `public/index.html` in your favorite web browser.
   Navigate to the post you're interested in.

When you change the Rmd file you're working on, just run `blogdown::build_site`
again, then press Refresh in your browser to see the new version.

Again, do **not** commit the contents of `public/` to Git.

## Static pages and links

The About page is generated from `content/about.md`, and can be edited there.
It's just regular Markdown, not R Markdown.

The links in the left sidebar are configured by `config.toml`, as is the
description at the top of the page.
