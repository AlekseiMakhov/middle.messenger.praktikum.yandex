import './app/assets/styles/index.scss';

import definePage from './app/router/router';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app') as HTMLElement;
  definePage()(app);
});
