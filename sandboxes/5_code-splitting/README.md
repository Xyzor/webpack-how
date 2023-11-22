## How to Run

`yarn start-X` will automatically builds on change and serves /dist using a webserver.

`X` depends on what type of code splitting you're interested in.

- ep (Entry Points with or without duplication)
- sc (Split Chunks)
- di (Dynamic Import)

# Overview

https://webpack.js.org/guides/code-splitting/

## Entry Points:

Using them is:

- Manual
- If two entries use the same dependency, both bundle will contain it

  Unless the `dependOn: 'shared'` is specified!

To specify entry dependencies, remove the comment from `dependOn` & `shared` keys in the `entry-points_webpack.config.js`.

Two entries in a single html page is technically allowed but not recommended.  
Instead 1 entry with multiple imports.

## Split Chunks

Almost does the same as Entry Points with `dependOn` but automatically

The only difference I noticed is that Entry Points with `dependOn` will remove a non-node_modules dependency as well.  
While Split Chunks will only move node_modules dependencies out.

If you run `yarn build-sc`, you'll see that lodash is in a separate bundle but print.js is still in both

# Advantage

You could optimize load time by load prioritizing.
