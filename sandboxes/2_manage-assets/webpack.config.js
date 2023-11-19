const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      // For files matching `test`, use `use` instead of the default import/require
      {
        test: /\.css$/i,
        // style-loader: responsible for style-import handling & CSS inline-injection into DOM
        // css-loader: responsible for import/resolve like statement resolution within CSS files, e.g.: @import, url()
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
