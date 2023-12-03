const path = require("path");

module.exports = {
  mode: "development",
  // In production mode, if you wish to bundle lodash, webpack will extract the license to a separate file in /dist
  // mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    clean: true,
    /**
     * To expose the exports in index.js, we can define the library property.
     * With this config, we only exposed the exports through <script> tags
     * <script>window.webpackNumbers</script>
     *
     * It won't be usable within other environments like
     * CommonJS: const webpackNumbers = require('webpack-numbers');
     * AMD: require(['webpackNumbers'], function (webpackNumbers) { webpackNumbers.wordToNum('Two'); });
     * etc.
     */
    // library: "webpackNumbers"

    /**
     * To support other environments
     */
    globalObject: "this",
    /**
     * The library config as with anything else within output {}, is tied to the entry point config
     *
     * Array like entry point isn't recommended
     */
    library: {
      name: "webpackNumbers",
      type: "umd",
    },
  },
  /**
   * This will only work if everything from lodash is used through it's index
   * If you're referencing a file directly like
   * import file from 'lodash/file.js';
   * that file will be bundled.
   *
   * To avoid either list that import additionally or use regexp.
   * externals: ['lodash', 'lodash/file.js', /^lodash\/.+$/]
   */
  //externals: {
  //  lodash: {
  //    commonjs: "lodash",
  //    commonjs2: "lodash",
  //    amd: "lodash",
  //    root: "_",
  //  },
  //},
};
