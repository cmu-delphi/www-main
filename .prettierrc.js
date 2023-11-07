module.exports = {
  printWidth: 120,
  semi: true,
  trailingComma: "es5",
  plugins: ["prettier-plugin-go-template"],
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template",
      },
    },
  ],
};
