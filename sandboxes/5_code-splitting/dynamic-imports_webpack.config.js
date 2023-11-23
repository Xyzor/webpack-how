const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/dynamic-imports_index.js",
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
