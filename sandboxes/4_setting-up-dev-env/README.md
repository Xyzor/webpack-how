## How to Run

`yarn start` will automatically builds on change and serves /dist using a webserver.

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
