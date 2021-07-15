const fetch = require("node-fetch");
const parseGitUrl = require("git-url-parse");

module.exports = function (config) {

  // Add filters to Nunjucks
  config.addFilter("squash", require("./filters/squash.js") );
  config.addFilter("appendToName", require("./filters/fileNameAppend.js") );
  config.addFilter("stringify", require("./filters/stringify.js") );

  // Group posts and links into collections without leaning on tags
  config.addCollection("templates", async function (collection) {
    const templates = collection.getFilteredByGlob("src/site/template/*.md");

    return await Promise.all(templates.map(async (template) => {
      const { full_name } = parseGitUrl(template.data.repo);

      template.data.stars = await fetch(`https://api.github.com/repos/${full_name}`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      })
        .then(res => res.json())
        .then(json => json.stargazers_count);

      return template;
    }));
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes"
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };

};
