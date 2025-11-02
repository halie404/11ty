export default function (eleventyConfig) {
  // Watch src folder
  eleventyConfig.addWatchTarget("src/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site", // default output folder
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
