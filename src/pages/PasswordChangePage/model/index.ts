import Page from '../ui';
import { passwordChangeFormChildren, model } from '../config';

export const passwordChangePageInit = (root: HTMLElement) => {
  const page = new Page(passwordChangeFormChildren, model);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
