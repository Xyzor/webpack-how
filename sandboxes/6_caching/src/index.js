import _ from "lodash";
import printMe from "./print.js";

console.log(_.join(["Index", "module", "loaded!"], " "));

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello";

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
