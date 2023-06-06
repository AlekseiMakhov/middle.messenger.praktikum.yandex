import './assets/styles/index.scss';
import { registerPartials } from './partials';
import definePage from './router';
import './pages/login/login';
import type { CanUndefined } from './types';

registerPartials();
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const page: CanUndefined<any> = definePage();
  app.innerHTML = page.compiledPage;
  page.actionHandler();
});
