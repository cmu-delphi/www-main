# Delphi Website

Delphi's homepage at https://cmu-delphi-main.netlify.app/

This site is based on [Hugo](https://gohugo.io) and uses [Prettier](https://prettier.io) for formatting.

## Structure

The main content is in the `/content` directory written in Markdown or RMarkdown for blog posts.
In addition to the Markdown content frontmatter with YAML syntax is used at the beginning of the file to customize and describe the content. Common fields include `title` and `description`.
However, depending on the file it can have additional fields. For example for blog posts additional fields are used to list the authors, hero images, summaries, tags, and so on.

### Linking

Hugo uses so called shortcodes for embedding logic into Markdown files. A good example is linking to other pages.

A relative reference to another page can be created using the `relref` shortcode. The argument is the filename with an optional `#` anchor to jump to a specific section.

**Examples**

```
national daily survey]({{< relref "surveys">}})
[syndromic COVID-19 indicator based on doctor visits]({{< relref "2020-10-14-dv-signal" >}})
[self-reported symptoms]({{< relref "2020-08-26-fb-survey#whats-in-the-survey" >}})
```

Instead of a direct link to the API reference there is the `apiref` shortcode. The advantage is that it is easy to later change the API base URL without changing each appearance. The argument is the path segment to point to.

**Examples**

```
[public API]({{< apiref "api/covidcast.html" >}})
[Epidata API]({{< apiref "/" >}})
```

In RMarkdown things are slightly more different since the R Markdown parser is used before Hugo takes over. Blogdown has a special function for handling shortcodes: `blogdown::shortcode_html`.

**Examples**

```
[Facebook](`r blogdown::shortcode_html("ref", "2020-08-26-fb-survey")`)
[previous exploratory investigations](`r blogdown::shortcode_html("ref", "2020-08-26-fb-survey#some-interesting-examples")`)
[public API](`r blogdown::shortcode_html("apiref", "api/covidcast.html")`)

```

### Data

In addition, there in the `/data` directory there are the following listings in YAML syntax

- `authors.yaml` list of blog authors referenced in the `authors` field in blog posts. This list is used to generated the author information at the end of a blog post
- `supporters.yaml` list of supporters/collaborators

## Development Environment

### Web Editor Only

1. Install Node: https://nodejs.org/en/download/
1. Run `npm install`

#### Commands

1. run `npm start` to create a development Hugo server running at http://localhost:1313
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
A Github action should runs when Rmd files changes so it will verify that the blog post can be built.
However, the converted HTML file along with all generated images are committed to the repository.
This simplifies the deployment and ensures that we have a blog post even when the API or data changes.
