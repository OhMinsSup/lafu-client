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
      width: {
        1024: "1024px",
        768: "768px",
        480: "480px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
