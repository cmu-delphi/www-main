# Delphi Website

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/cmu-delphi/www-main)


The current stable `main` version is deployed at https://delphi.cmu.edu and https://cmu-delphi-main.netlify.app/.

The next `dev` version is deployed at https://staging.delphi.cmu.edu/ and https://dev--cmu-delphi-main.netlify.app/.

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
national daily survey]({{< relref "ctis">}})
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
`r blogdown::shortcode_html("reflink", "2020-08-26-fb-survey", "Facebook")`
`r blogdown::shortcode_html("reflink", "2020-08-26-fb-survey#some-interesting-examples", "previous exploratory investigations")`
`r blogdown::shortcode_html("apireflink", "api/covidcast.html", "public API")`

```

## Development Environment

One click: [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/cmu-delphi/www-main)

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

As an alternative you can use Docker and Docker Compose. Then it reduces to `docker-compose up -d` to create a docker container for the current environment. In the following you would need to jump into the container to execute the upcoming command via `docker-compose exec r bash`.

#### Commands

1. Activate the environment: `conda activate www-main`
1. Run blogdown to convert the files to HTML: `Rscript -e 'blogdown::build_site(local=TRUE, run_hugo=FALSE, build_rmd=TRUE)'`
   - `local=TRUE` similar to `-D` to process draft files
   - `run_hugo=FALSE` to manually run hugo
   - `build_rmd=TRUE` force a (re)build of the Rmd pages
1. Run blogdown to convert a single file to HTML: `Rscript -e 'blogdown::build_site(local=TRUE, run_hugo=FALSE, build_rmd="content/blog/<NAME>.Rmd")'` where `<NAME>` should be replaced by the name of the Rmd file.
1. Alternatively, run `npm run build:blog`
1. Run Hugo server as usual

blogdown also has an integrated server `blogdown::serve_site()` which will render RMarkdown files on the fly and does a similar thing as `hugo server -D`.
A shortcut is available through `npm run start:blog`.

## Adding a new blog post

*Prerequisite*: Installed Blog Editor environment from the previous section

### Create new blog file

Create a new file `content/blog` with a naming convention of `YYYY-MM-DD-short-title.Rmd`. The date is the creation date. Copy the template post or another example to start with. *Note*: Starting the file with an underscore (e.g. `_2021-04-20-jj-vaccine.Rmd`), will stop this file from being automatically checked by the Github Action CI. Only do this when the public CI cannot build this post, if for example private data is used.

In case you use new dependencies don't forget to either edit `environment.yml` or `dependencies.R`.
A Github action should run when Rmd files changes so it will verify that the blog post can be built.
However, the converted HTML file along with all generated images are committed to the repository.
This simplifies the deployment and ensures that we have a blog post even when the API or data changes.

### Edit Blog Header

The header of a blog file contains numerous attributes to be defined, including: name, publication date (`date`), tags, a short summary (at most 150 characters), and a list of authors. The author list `authors` is a list of people keys, see below for how to add people.

The `heroImage` is an optional hero image banner. The image is optional but its thumbnail version is not. However, the template post has good default value for this one. The hero image should be a JPG file with 1120x440 pixels. The thumbnail hero image should be a JPG file with 300x300 pixels. The files should be stored in `/content/blog/images`.

The `related` list is a list of related blog links identified by their file name without the Rmd suffix.

### Linking within the blog post

In order to generate links that are relative to the whole website there are two short codes for R Markdown available.

#### Linking to another page

using the `reflink` shortcode. For example, `r blogdown::shortcode_html("reflink", "2020-09-18-google-survey", "Google")` will generate a relative link to the blog post with the filename `2020-09-18-google-survey` and anchor text `Google`.

#### Linking to the API docs

using the `apireflink` shortcode. For example, `r blogdown::shortcode_html("apireflink", "api/covidcast.html", "COVIDcast API")` will generate a link to the API docs and its sub page `api/covidcast.html` and will look like: [`COVIDcast API`](https://cmu-delphi.github.io/delphi-epidata/).

### Creating wide figures

In case of a wide figure, one can break out of the layout by adding the `out.extra = 'class="wide-figure"'` extra argument to the corresponding R chunk.

e.g.,
```
{r, message = FALSE, warning = FALSE, fig.width = 9, fig.height = 5, out.extra = 'class="wide-figure"'}
ggplot(...)
```

### Adding static images

Static images (e.g. pre-generated plots) should be stored in a `/static/blog/<BLOGFILE_NAME>_files` directory and referenced using something like

```
![](/blog/2021-04-29-vaccine-trends-hispanic_files/hesitancy_over_time_hispanic_and_white_adults.png)
```

### Building the blog file

see before using `Rscript -e 'blogdown::build_site(local=TRUE, run_hugo=FALSE, build_rmd="content/blog/<NAME>.Rmd")'` where `<NAME>` should be replaced by the name of the Rmd file. **The generated files should be committed to this repository to ensure reproducibility.**


## Adding new people (team, blog authors)

People on this website are centrally managed in the `/content/people/index.md` file. Each entry should have the following attributes:

 * `key` ... short key to identify this person when referencing them in the blog section
 * `firstName`, `lastName`, `affiliation`
 * `image` ... name of the head shot image (preferred 500x500px in JPG format) stored in `/content/people/headshots`
 * `description` ... used within the blog footer as an about the author text
 * `note` ...optional note about past contributors
 * `link` ... optional used for linking to a personal website
 * `team` ... list of teams this person is part of. used to assign places on the teams page. possible values are:
    * `core` ... core member
    * `blog` ... blog author
    * `highlight` ... highlight person on front page
    * `external` ... external person not to be listed in the teams page
    * `past` ... past member team section
    * `leadership` ... ryan and roni
    * `contributors` ... contributor team section
    * `google` ... google team section


## Adding new news item

News items are short announcements that should be persistent. The are centrally managed in the `/content/news/headless` directory. Each news item is its own file with content, title, and publication date.

## Release Process

The release consists of multiple steps which can be all done via the GitHub website:

1. Go to [create_release GitHub Action](https://github.com/cmu-delphi/www-main/actions/workflows/create_release.yml) and click the `Run workflow` button. Enter the next version number or one of the magic keywords (patch, minor, major) and hit the green `Run workflow` button.
1. The action will prepare a new release and will end up with a new [Pull Request](https://github.com/cmu-delphi/www-main/pulls)
1. Let the code owner review the PR and its changes and let the CI check whether everything builds successfully
1. Once approved and merged, another GitHub action job starts which automatically will
   1. create a git tag
   1. create a [GitHub release](https://github.com/cmu-delphi/www-main/releases) with automatically derived release notes
   1. create docker image and the production system will be notified to pull this update
1. Once the jobs are completed the new release should be available at https://delphi.cmu.edu within minutes.
1. Done
