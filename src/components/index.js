import Handlebars from 'handlebars';
import formTpl from './form.tpl.js';

export const registerComponents = () => {
  Handlebars.registerPartial('form', formTpl);
}
