import loginPage from "./pages/login/login.tpl.js";
import registerPage from "./pages/register/register.tpl.js";
import chatPage from "./pages/chat/chat.tpl.js";
import config from "./config/index.js";
import errorTpl from "./pages/error/error.tpl.js";
import mainPage from "./pages/main/main.tpl.js";
import changePasswordTpl from './pages/changePassword/changePassword.tpl.js';
import profileTpl from './pages/profile/profile.tpl.js';

export default [
  {
    path: "/",
    name: "main",
    template: mainPage,
    config: config.mainConfig,
  },
  {
    path: "/chat",
    name: "chat",
    template: chatPage,
    config: config.chatPageConfig,
  },
  {
    path: "/login",
    name: "login",
    template: loginPage,
    config: config.loginPageConfig,
  },
  {
    path: "/register",
    name: "register",
    template: registerPage,
    config: config.registerPageConfig,
  },
  {
    path: "/profile",
    name: "profile",
    template: profileTpl,
    config: config.profileConfig,
  },
  {
    path: "/change-password",
    name: "changePassword",
    template: changePasswordTpl,
    config: config.changePasswordConfig,
  },
  {
    path: "/not-found",
    name: "notFound",
    template: errorTpl,
    config: config.notFoundPageConfig,
  },
  {
    path: "/server-error",
    name: "serverError",
    template: errorTpl,
    config: config.serverErrorPageConfig,
  },
];
