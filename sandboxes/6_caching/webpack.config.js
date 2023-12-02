const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    /**
     * Extract runtime boilerplate code into a separate chunk
     * Since it's a separate file it can have its own contenthash
     * and will only change if the boilerplate changes
     */
    runtimeChunk: "single",
    /**
     * Extract vendor code into it's own chunk
     * for the same reason as the runtime boilerplate
     */
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    /**
     * Disclaimer: In the latest version currently (^5.89.0),
     * this seems to be happening by default without having to specify this option
     *
     * Adding a new file to the codebase and having it part of the dependency tree
     * will result in a new webpack module.id (Try it by removing comment of print.js in index.js).
     * This will force chunks that you'd expect to remain untouched to be updated.
     * In this example the following chunks would have to be updated:
     * - main: because of the new content (Expected)
     * - runtime boilerplate: because webpack have to reference the new module (Expected)
     * - vendor: because of the change in module ids (Not Expected)
     *
     * To avoid the last, this option should be used
     */
    // moduleIds: "deterministic",
  },
  plugins: [new HtmlWebpackPlugin({ title: "Caching" })],
  mode: "development",
  devServer: {
    static: "./dist",
  },
};
