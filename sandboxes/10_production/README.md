https://webpack.js.org/guides/production/

webpack-merge offer different merging options.

The TerserPlugin (used automatically with `mode: "production"`) besides tree-shaking, also does minification.

To minimize CSS, you can use recommended plugins from [webpack's documentation](https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production).
