## How to Run

1. `yarn build` generates the distributables into `dist`
2. `yarn start` will use `http-server` to spin up a local webserver and serve `dist`.

# Overview

https://webpack.js.org/guides/development/

Along with webpack comes some quality-of-life improvement tools which help us develop our application.

`webpack --watch`: Automatically runs `webpack` when a file in the dependency graph changes.

`webpack-dev-server`: It's a bundle of a change watcher and a webserver.

`webpack-dev-middleware`: The change watcher that `webpack-dev-server` uses.  
It is exposed in case you'd like to use another webserver (e.g.: express).  
Not part of this example.

# Advantage

Convenience.
