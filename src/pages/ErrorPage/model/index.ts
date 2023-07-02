import Page from '../ui';
import { props } from '../config';

export const errorPageInit = (root: HTMLElement) => {
  const page = new Page(props);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
