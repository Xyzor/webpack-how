const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * sideEffects in package.json tells webpack whether this module
 * has a 100% static structure or not.
 * That is, can the webpack reliable know during build time
 * what exactly is being imported and exported?
 *
 * Dynamic imports would make it impossible for webpack
 * to know what's in use at build time.
 *
 * For the exact definition of "side effect" visit the page in README.md
 *
 * - false: webpack is allowed to prune unused
 * - list of files with side effects
 */

module.exports = {
  optimization: {
    // Run analysis on what exports are being used
    // This information then can be used for dead code removal
    usedExports: true,
  },
  mode: "development",

  // mode: "production",

  entry: "./src/index.js",
  devServer: { static: "./dist" },
  output: {
    filename: "[name]-[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ title: "Tree Shaking" })],
};
