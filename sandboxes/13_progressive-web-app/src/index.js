// Register the Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

function component() {
  const container = document.createElement("div");

  const label = document.createElement("span");
  label.innerHTML = "PWA";

  container.appendChild(label);

  return container;
}

document.body.appendChild(component());
