import "./assets/styles/index.scss";
import { registerPartials } from "./partials/index.js";
import { registerComponents } from './components/index.js';
import definePage from "./router.js";

registerPartials();
registerComponents();

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  app.innerHTML = definePage();
});
