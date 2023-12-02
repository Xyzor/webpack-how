https://webpack.js.org/guides/caching/

Content driven caching. Until content changes, keep the cache.

You can move webpack's runtime boilerplate out into it's own chunk

You can split your code into different chunks and have webpack generate a hash,
based only on the content of that chunk.
If that content doesn't change, the cache will remain, even if the rest of the codebase changes.
