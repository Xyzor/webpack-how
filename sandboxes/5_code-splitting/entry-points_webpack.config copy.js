const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
      // dependOn: "shared",
    },
    another: {
      import: "./src/another.js",
      // dependOn: "shared",
    },
    // shared: "./src/print.js",
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
  optimization: {
    runtimeChunk: "single",
  },
};
