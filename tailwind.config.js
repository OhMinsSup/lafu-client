const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: "./src/**/*.svelte",
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: colors.purple,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
