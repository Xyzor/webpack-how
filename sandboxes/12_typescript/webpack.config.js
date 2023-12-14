const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  // Tells webpack to extract the source maps from the compiled JS files into the bundles
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        /**
         * ts-loader uses tsc as TS compiler and relise on the tsconfig.json for configuration
         * If you set module in tsconfig.json to "CommonJS" with ts-loader as the loader,
         * webpack won't be able to tree-shake your code.
         *
         * Alternative can use babel-loader to transpile your code.
         * The @babel/preset-typescript that lets babel handle both JS and TS files
         * comes with @babel/plugin-transform-typescript.
         * But that plugin doesn't do any type checking!
         */
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
