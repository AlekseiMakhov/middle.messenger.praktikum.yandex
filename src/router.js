import Handlebars from 'handlebars';
import routes from './routes.js';

const definePage = () => {
  let currentPath = window.location.pathname;

  if (currentPath !== '/' && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }

  const route = routes.find((item) => currentPath === item.path);

  const notFoundRoute = routes.find((item) => item.name === 'notFound');

  if (!route) {
    window.location.replace(notFoundRoute.path);
  }

  const template = Handlebars.compile(route.template);

  return template(route.config);
};

export default definePage;
