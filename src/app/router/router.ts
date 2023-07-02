import { routes } from "./routes";

const definePage = () => {
  let currentPath = window.location.pathname;

  if (currentPath !== "/" && currentPath.endsWith("/")) {
    currentPath = currentPath.slice(0, -1);
  }

  const route: any = routes.find((item) => currentPath === item.path);

  const notFoundRoute: any = routes.find((item) => item.name === "notFound");

  if (!route) {
    window.location.replace(notFoundRoute.path);
  }

  return route.page;
};

export default definePage;
