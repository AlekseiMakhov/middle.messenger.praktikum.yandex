import "./assets/styles/index.scss";
import { registerPartials } from "./partials/index.js";
import definePage from "./router.js";

registerPartials();
document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  const page = definePage();
  app.innerHTML = page.compiledPage;
  page.actionHandler();
});
