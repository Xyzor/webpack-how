## How to Run

1. `yarn build` generates the distributables into `dist`
2. `yarn start` will use `http-server` to spin up a local webserver and serve `dist`.

# Overview

https://webpack.js.org/guides/output-management/

Webpack, along with it's `HtmlWebpackPlugin` plugin will take care of generating the `index.html` and populating it with all the modules that're specified in the config.

# Advantage

No longer have to keep track of what modules are in use in `/dist/index.html`.
