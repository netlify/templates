---
title: Contribute a template
layout: layouts/base.njk
pageClass: contribute
tags:
  - nav
---

You want to contribute a template? We love you. Here's how to do it:

### 1. Add your project template to GitHub

All of the templates on this site have a home on GitHub. You will need the URL of your template's repository in order to add it here.


### 2. Make sure that your project builds

All project templates will need to successfully build on Netlify. This usually requires little more than ensuring that all dependencies are specified in a `package.json` file, and that the correct build commands, source folders and build folders are specified in a `netlify.toml` file.

Any of the other [templates](/) listed on this site will be a useful reference for you.


### 3. Add a page for your template

Each template gets a page of its own on this site with a unique URL. For guidance on how to create that page, please follow the instructions in [this site's README on GitHub](https://github.com/netlify/templates)


### 4. Make a pull request

This site is generated using a static site generator called [Eleventy](https://11ty.io). Once you have added a page describing your template, create a pull request to ([this site repo](https://github.com/netlify/templates)).
