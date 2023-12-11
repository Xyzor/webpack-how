const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  // Besides the TerserPlugin (for tree-shaking) this mode automatically sets the NODE_ENV to production
  // via the DefinePlugin
  mode: "production",
  // For benchmark tests it's a good practice to allow webpack to build source maps in production
  // but you should choose one with a fairly quick build speed.
  // In dev we use the inline-source-map
  // inline-* & eval-* generally should be avoided in production
  devtool: "source-map",
});
