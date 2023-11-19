import "./assets/index.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello";
  element.classList.add("container");

  return element;
}

document.body.appendChild(component());
