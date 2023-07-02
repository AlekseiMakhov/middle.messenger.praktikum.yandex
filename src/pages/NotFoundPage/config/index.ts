import { Props } from '../types';

export const props = <Props>{
  attrs: {
    class: '',
  },
};

const header = {
  component: 'Header',
  attrs: {
    class: 'header header_xl mb-40',
  },
  label: '404',
};

const text = {
  component: 'Text',
  attrs: {
    class: 'text mb-40',
  },
  text: 'Страница не найдена',
};

const link = {
  component: 'Link',
  attrs: {
    class: 'link-container',
  },
  label: 'На главную',
  href: '/',
};

export const children = {
  header,
  text,
  link,
};
