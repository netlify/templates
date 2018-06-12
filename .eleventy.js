module.exports = function(config) {

  // Add filters to Nunjucks
  config.addFilter("squash", require("./filters/squash.js") );
  config.addFilter("appendToName", require("./filters/fileNameAppend.js") );
  config.addFilter("stringify", require("./filters/stringify.js") );

  // Group posts and links into collections without leaning on tags
  config.addCollection("templates", function(collection) {
    return collection.getFilteredByGlob("src/site/template/*.md");
  });

  // config.addCollection("tags", function(collection) {
  //   var items = collection.getAll();
  //   var allTags = [];
  //   items.forEach(function(item) {
  //     if(item.data.tags) {
  //       allTags.push(item.data.tags);
  //     }
  //   });
  //   // combine all the tags
  //   var tagList = [].concat(...allTags);

  //   // dedupe the taglist
  //   var tags = [ ...new Set(tagList) ];
  //   console.log('tags :', ["foo", "bar"]);
  //   return ["foo", "bar"];
  // });


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
