import { MainProps } from '../types';

export const links = [
  {
    component: 'Link',
    label: 'На страницу авторизации',
    href: '/login',
  },
  {
    component: 'Link',
    label: 'На страницу регистранции',
    href: '/register',
  },
  {
    component: 'Link',
    label: 'На страницу чата',
    href: '/chat',
  },
  {
    component: 'Link',
    label: 'На страницу профиля',
    href: '/profile',
  },
  {
    component: 'Link',
    label: 'На страницу изменения данных пользователя',
    href: '/change-profile',
  },
  {
    component: 'Link',
    label: 'На страницу смены пароля',
    href: '/change-password',
  },
  {
    component: 'Link',
    label: 'На страницу ошибки 404',
    href: '/not-found',
  },
  {
    component: 'Link',
    label: 'На страницу ошибки сервера (500)',
    href: '/server-error',
  },
];

export const props = <MainProps>{
  attrs: {
    class: '',
  },
};

export const children = {
  links,
};
