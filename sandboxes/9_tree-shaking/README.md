https://webpack.js.org/guides/tree-shaking/

**The [Conclusion](https://webpack.js.org/guides/tree-shaking/#conclusion) part of this chapter nicely summarizes what's needed for tree shaking to work!**

Based on these experiments it seems that in the current version of webpack, `sideEffects` has no effect on the output!

`usedExports` - parses the code to detect side-effects (expensive process)  
`sideEffects` - allows devs to specify modules that're known to have side effect upfront (cheap process)

In `development` mode:

- `sideEffects` gets ignored during build _(it's value doesn't affect the content)_
- `usedExports` correctly marks the unused exports during build but still puts it in the bundle

In `production` mode:

- `sideEffects` gets ignored during build _(it's value doesn't affect the content)_
- `usedExports` not needed config but the same exports that got marked in dev are no longer in the bundle

> It works by default in `production` because webpack automatically uses the `ModuleConcatenationPlugin` plugin.  
> You have to add it yourself if you're not using that mode.

`sideEffects` config extends to other assets, like CSS files too.
This means that if you want to import a CSS file via `css-loader`
you have to add them to the `sideEffects` list to avoid
unintentional pruning in productin mode.
