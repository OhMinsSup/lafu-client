module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-optimize",
  ],
  alias: {
    "~": "./src",
    "@": "./src",
  },
  knownEntrypoints: [],
  packageOptions: {},
  devOptions: {
    // open: 'none'
  },
  buildOptions: {},
};
