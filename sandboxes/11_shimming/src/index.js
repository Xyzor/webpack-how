const { file, parse } = require("./globals.js");

function component() {
  const element = document.createElement("div");

  // 1st scenario
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // 2nd scenario
  // element.innerHTML = join(["Hello", "webpack"], " ");

  // 3rd scenario
  // this.alert("Hmmm, this probably isn't a great idea...");

  // 4th scenario
  //window.alert(file);
  //parse();

  return element;
}

document.body.appendChild(component());
