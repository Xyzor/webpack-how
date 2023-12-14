const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  // On the 1st instance of _ that webpack encounters, it'll include lodash
  // and provides it to all the modules that need it
  // 1st scenario
  plugins: [new webpack.ProvidePlugin({ _: "lodash" })],

  // This would allow the tree-shaker functionality to drop all the rest of lodash
  // 2nd scenario
  //   plugins: [new webpack.ProvidePlugin({ join: ["lodash", "join"] })],

  // If a legacy module expects `this` to refer to the `window` object
  // then we'd get an error if we were to execute it in a CommonJS context
  // where `this` refers to `module.exports`.
  // To solve this, you can override the `this` reference.
  // 3rd scenario
  //plugins: [new webpack.ProvidePlugin({ join: ["lodash", "join"] })],
  //module: {
  //  rules: [
  //    {
  //      test: require.resolve("./src/index.js"),
  //      use: "imports-loader?wrapper=window",
  //    },
  //  ],
  //},

  // You'd never want to do this for your own package.
  // You're exporting `files` and `helpers.parse` global variables from `global.js` as normal module exports
  // 4th scenario
  //module: {
  //  rules: [
  //    {
  //      test: require.resolve("./src/globals.js"),
  //      use: "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse",
  //    },
  //  ],
  //},
};
