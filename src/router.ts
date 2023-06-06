import routes from './routes';
import Handlebars from 'handlebars';

const definePage = () => {
  let currentPath = window.location.pathname;

  const route = routes.find((item) => currentPath === item.path);

  const notFoundRoute = routes.find((item) => item.name === 'notFound');

  if (!route) {
    window.location.replace(notFoundRoute.path);
  }

  const template = Handlebars.compile(route.template);

  return {
    compiledPage: template(route.config),
    actionHandler: route.handler,
  };
};

export default definePage;
