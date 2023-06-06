import Handlebars from 'handlebars';
import buttonTpl from './button.tpl';
import inputTpl from './input.tpl';
import linkTpl from './link.tpl';
import headerTpl from './header.tpl';
import textTpl from './text.tpl';

export const registerPartials = () => {
  Handlebars.registerPartial('button', buttonTpl);
  Handlebars.registerPartial('link', linkTpl);
  Handlebars.registerPartial('input', inputTpl);
  Handlebars.registerPartial('header', headerTpl);
  Handlebars.registerPartial('text', textTpl);
};
