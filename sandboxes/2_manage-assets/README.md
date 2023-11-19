## How to Run

1. `yarn build` generates the distributables into `dist`
2. `yarn start` will use `http-server` to spin up a local webserver and serve `dist`.

# Overview

https://webpack.js.org/guides/asset-management/

Webpack automatically generates a dependency graph which allows it to only bundle assets that are being dependent on.  
This graph always starts of with an entry-point defined in a config provided to webpack (there's a default entry point).

# Advantage

You don't have to keep up with what modules are actually being used and what are obsolete.
Webpack accepts most files as assets, given that there're built-in or 3rd-party loaders/asset-modules for them
