import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello";

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// To have the btn.onclick with the reference pointing to the updated printMe function
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");

    document.body.removeChild(element);
    // To have the btn.onclick with the reference pointing to the updated printMe function
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
