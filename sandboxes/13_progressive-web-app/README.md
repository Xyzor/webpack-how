https://webpack.js.org/guides/progressive-web-application/

PWAs are web apps that try to mimic the experience of a native application.  
Experience like offline availability.

To achieve this, PWAs use Service Workers.

For example if you start a server with http-server, the app will be available
through the browser but it's only stored in memory.  
If you stop the server and reload the page, the app's no longer available.  
PWAs could include this experience.

This example will spawn a service worker that will serve up our application  
on client side if our server is no longer available.  
I'm not sure whether it uses the service worker or the server if both are available.

Google has an open-source toolkit called Workbox for which webpack has a plugin.  
This toolkit is meant to support PWAs.
