import loginPage from './pages/login/login.tpl';
import loginPageHandler from './pages/login/login';
import registerPage from './pages/register/register.tpl';
import registerPageHandler from './pages/register/register';
import chatPage from './pages/chat.tpl';
import config from './config';
import errorTpl from './pages/error.tpl';
import mainPage from './pages/main.tpl';

export default [
  {
    path: '/',
    name: 'main',
    template: mainPage,
    config: config.mainConfig,
    handler: (e) => {},
  },
  {
    path: '/chat',
    name: 'chat',
    template: chatPage,
    config: config.chatPageConfig,
    handler: () => {},
  },
  {
    path: '/login',
    name: 'login',
    template: loginPage,
    config: config.loginPageConfig,
    handler: loginPageHandler,
  },
  {
    path: '/register',
    name: 'register',
    template: registerPage,
    config: config.registerPageConfig,
    handler: registerPageHandler,
  },
  {
    path: '/not-found',
    name: 'notFound',
    template: errorTpl,
    config: config.notFoundPageConfig,
    handler: () => {},
  },
  {
    path: '/server-error',
    name: 'serverError',
    template: errorTpl,
    config: config.serverErrorPageConfig,
    handler: () => {},
  },
];
