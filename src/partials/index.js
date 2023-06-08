import Handlebars from 'handlebars';

import buttonTpl from './button.tpl.js';
import inputTpl from './input.tpl.js';
import linkTpl from './link.tpl.js';
import headerTpl from './header.tpl.js';
import textTpl from './text.tpl.js';
import avatarTpl from './avatar.tpl.js';

export const registerPartials = () => {
  Handlebars.registerPartial('button', buttonTpl);
  Handlebars.registerPartial('link', linkTpl);
  Handlebars.registerPartial('input', inputTpl);
  Handlebars.registerPartial('header', headerTpl);
  Handlebars.registerPartial('text', textTpl);
  Handlebars.registerPartial('avatar', avatarTpl);
};
