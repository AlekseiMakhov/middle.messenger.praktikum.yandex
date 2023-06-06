import './assets/styles/index.scss';
import registerPageTemplate from './partials/button.tpl.ts';
import Handlebars from 'handlebars';
import config from './config/register.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const template = (app.innerHTML = registerPageTemplate(config));
});
