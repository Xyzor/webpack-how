https://webpack.js.org/guides/author-libraries/

Note how `lodash` is a dev dependency, yet without the `externals` config it gets bundled into the entry point.  
This means that webpack isn't concerned about dependency, dev-dependency status.

This isn't an extensive example of the `output` and `externals` configurations. There're other ways to configure them.
