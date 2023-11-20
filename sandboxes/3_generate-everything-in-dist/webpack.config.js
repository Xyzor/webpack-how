const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  plugins: [new HtmlWebpackPlugin({ title: "Generate Everything in /dist" })],
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    // Remove everything from /dist since now it should only contain generated content
    clean: true,
  },
};
