# The Netlify CMS Template Showroom

This is a board with templates for static site generators and
boilerplates.


## Developing

This site uses Gulp to compile its Sass and Javascript, and then [Eleventy](https://11ty.io) as a static site generator to build the pages.

The site is deployed onto Netlify via a continuous deployment process which just requires a push to the master git branch to publish new changes.


### Prerequisites

In order to develop locally you will need:

- git
- Node (v0.9.0 or later)
- Yarn (v1.5.1 or later)
- [Imagemagick](http://www.imagemagick.org/script/index.php)


### Installing dependencies and developing locally

```
# Clone this repository
git clone git@github.com:netlify/templates.git netlify.templates.com

# Move to the project root
cd netlify.templates.com

# install dependencies
yarn

# start local development server and watch for changes
# with a local server on http://127.0.0.1:8008
yarn start

```



## Contributing templates

All templates must build reside in their own git repository with suitable readme instructions for installing, developing and deploying.

Automated builds should include installation of all perquisites and successfully build on Netlify.

To add contribute a template to this listing:

- fork this repository
- add your template as a new markdown file in the `src/site/template/` directory following the conventions described below
- add a screenshot as a preview image illustrating a view of this template to the `src/image/previews` directory
- create a pull request to this repository

### Template page structure

Use these conventions in your new template description page:

`src/site/template/UNIQUE-DESCRIPTIVE-FILE-NAME.md`

```
---
title: Descriptive title for display
repo: URL of git repository for this template
preview: {filename for preview image}
tags:
  - react
  - gatsby
  - blog
---

{A description of the main features and technologies in this template}
```


