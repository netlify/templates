module.exports = function(config) {

  // Add filters to Nunjucks
  config.addFilter("squash", require("./filters/squash.js") );
  config.addFilter("appendToName", require("./filters/fileNameAppend.js") );
  config.addFilter("stringify", require("./filters/stringify.js") );
  config.addFilter("capitalize", (text) => text.replace(/\b\w/g, (m) => m.toUpperCase()));

  // Group posts and links into collections without leaning on tags
  config.addCollection("templates", function(collection) {
    return collection.getFilteredByGlob("src/site/template/*.md");
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
