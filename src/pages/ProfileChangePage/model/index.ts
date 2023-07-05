import { model, profileChangeFormChildren } from '../config';
import Page from '../ui';

export const profileChangePageInit = (root: HTMLElement) => {
  const page = new Page(profileChangeFormChildren, model);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
