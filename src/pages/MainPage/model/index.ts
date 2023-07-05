import MainPage, { props } from '../index';

export const mainPageInit = (root: HTMLElement) => {
  const page = new MainPage(props);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
