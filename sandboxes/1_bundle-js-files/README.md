## How to Run

1. `yarn build` generates the distributables into `dist`
2. `yarn start` will use `http-server` to spin up a local webserver and serve `dist`.

# Overview

https://webpack.js.org/guides/getting-started/

Webpack will bundle `index.js` and it's dependencies into `dist/main.js`.  
Before copying, webpack will transpile the code and converts some ES6+ syntax info ES5, including `import`.

Currenlty this functionality comes with webpack out of the box, without any configuration.

# Advantage

Minimizes the time your app has to wait while the browser starts multiple requests.  
This benefit most visible on HTTP/1.1 clients.
