const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  // For this example, you can ignore these
  plugins: [new HtmlWebpackPlugin({ title: "Code Splitting" })],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
