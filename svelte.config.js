const autoPreprocess = require("svelte-preprocess");

const production = process.env.NODE_ENV === "production";

module.exports = {
  preprocess: autoPreprocess({
    defaults: {
      script: "typescript",
    },
    scss: {
      prependData: '@import "./src/scss/main.scss";',
    },
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        // Check package.json browserslist
        // require("autoprefixer")(),
      ],
    },
    babel: {
      plugins: production ? ["transform-remove-console"] : [],
    },
  }),
};
