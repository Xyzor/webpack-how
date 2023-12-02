/**
 * Notice how the hash won't change even if you only import just the join.
 * import { join } from "lodash";
 *
 * That means, webpack bundles the whole lodash source eventhough we're only using join.
 * To improve on this, the Tree Shaking functionality will be necessary
 */
import _ from "lodash";
// import printMe from "./print.js";

console.log(_.join(["Index", "module", "loaded!"], " "));

function component() {
  const button = document.createElement("button");

  button.innerHTML = "Click me and check the console!";
  // button.onclick = printMe;

  return button;
}

document.body.appendChild(component());
