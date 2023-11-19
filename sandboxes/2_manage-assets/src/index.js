import "./assets/index.css";
import Logo from "./assets/image.png";

function component() {
  const container = document.createElement("div");

  const label = document.createElement("span");
  label.innerHTML = "With bg image";
  label.classList.add("text");

  const webpackLogo = new Image();
  webpackLogo.src = Logo;

  container.appendChild(label);
  container.appendChild(webpackLogo);

  return container;
}

document.body.appendChild(component());
