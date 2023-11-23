function getComponent() {
  return (
    import("lodash")
      // As of webpack 4, import from CommonJS modules won't resolve to the value of module.exports,
      // but creates an object for that module
      .then(({ default: _ }) => {
        const element = document.createElement("div");

        element.innerHTML = _.join(["Hello", "webpack"], " ");
        return element;
      })
      .catch((error) => "An error occurred while loading the component")
  );
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
