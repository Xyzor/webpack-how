import _ from "lodash";
import printMe from "./print.js";

console.log(_.join(["Another", "module", "loaded!"], " "));

function component() {
  const btn = document.createElement("button");

  btn.innerHTML = "Another Click";
  btn.onclick = printMe;

  return btn;
}

document.body.appendChild(component());
