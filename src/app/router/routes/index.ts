import { registerPageInit } from '../../../pages/RegisterPage';
import { loginPageInit } from '../../../pages/LoginPage';
import { profilePageInit } from '../../../pages/ProfilePage';
import { mainPageInit } from '../../../pages/MainPage';
import { profileChangePageInit } from '../../../pages/ProfileChangePage';
import { passwordChangePageInit } from '../../../pages/PasswordChangePage';
import { nofFoundPageInit } from '../../../pages/NotFoundPage';
import { errorPageInit } from '../../../pages/ErrorPage';
import { chatPageInit } from '../../../pages/ChatsPage';

export const routes = [
  {
    path: '/',
    name: 'main',
    page: mainPageInit,
  },
  {
    path: '/chat',
    name: 'chat',
    page: chatPageInit,
  },
  {
    path: '/login',
    name: 'login',
    page: loginPageInit,
  },
  {
    path: '/register',
    name: 'register',
    page: registerPageInit,
  },
  {
    path: '/profile',
    name: 'profile',
    page: profilePageInit,
  },
  {
    path: '/change-profile',
    name: 'change-profile',
    page: profileChangePageInit,
  },
  {
    path: '/change-password',
    name: 'changePassword',
    page: passwordChangePageInit,
  },
  {
    path: '/not-found',
    name: 'notFound',
    page: nofFoundPageInit,
  },
  {
    path: '/server-error',
    name: 'serverError',
    page: errorPageInit,
  },
];
