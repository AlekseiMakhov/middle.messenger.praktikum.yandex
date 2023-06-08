import loginPage from "./pages/login/login.tpl.js";
import loginPageHandler from "./pages/login/login.js";
import registerPage from "./pages/register/register.tpl.js";
import registerPageHandler from "./pages/register/register.js";
import chatPage from "./pages/chat.tpl.js";
import config from "./config/index.js";
import errorTpl from "./pages/error.tpl.js";
import mainPage from "./pages/main.tpl.js";

export default [
  {
    path: "/",
    name: "main",
    template: mainPage,
    config: config.mainConfig,
    handler: (...args) => {
      console.log(args);
    },
  },
  {
    path: "/chat",
    name: "chat",
    template: chatPage,
    config: config.chatPageConfig,
    handler: (...args) => {
      console.log(args);
    },
  },
  {
    path: "/login",
    name: "login",
    template: loginPage,
    config: config.loginPageConfig,
    handler: loginPageHandler,
  },
  {
    path: "/register",
    name: "register",
    template: registerPage,
    config: config.registerPageConfig,
    handler: registerPageHandler,
  },
  {
    path: "/not-found",
    name: "notFound",
    template: errorTpl,
    config: config.notFoundPageConfig,
    handler: (...args) => {
      console.log(args);
    },
  },
  {
    path: "/server-error",
    name: "serverError",
    template: errorTpl,
    config: config.serverErrorPageConfig,
    handler: (...args) => {
      console.log(args);
    },
  },
];
