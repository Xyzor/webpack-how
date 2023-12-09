const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",

    // If you want to specify the entry points for HMR
    // Runtime code for hot module replacement
    // hot: "webpack/hot/dev-server.js",
    // Dev server client for web socket transport, hot and live reload logic
    // client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Hot Module Replacement" }),

    // If you want to specify the entry points for HMR
    // Plugin for hot module replacement
    // new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: "./dist",
    // Enable HMR in webpack-dev-server
    hot: true,

    // If you want to specify the entry points for HMR
    // Dev server client for web socket transport, hot and live reload logic
    // hot: false,
    // client: false,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
};
