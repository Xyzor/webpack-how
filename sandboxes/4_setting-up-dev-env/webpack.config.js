const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [new HtmlWebpackPlugin({ title: "Setting up dev env" })],
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  // Do not minimize the bundled code
  mode: "development",
  // source-maps allows us to track back an error not just to the final bundle.js
  // but all the way to the specific js file it originated from
  devtool: "inline-source-map",
  // webpack-dev-server config
  devServer: {
    // The webserver in webpack-dev-server should serve this path
    static: "./dist",
  },
  optimization: {
    // This is needed because we have more than one entry points in a single html page
    // Code splitting section describes the why in more details
    runtimeChunk: "single",
  },
};
