module.exports = {
  printWidth: 120,
  semi: true,
  trailingComma: "es5",

  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
    {
      files: ["*.Rmd"],
      options: {
        parser: "markdown",
      },
    },
  ],
};
