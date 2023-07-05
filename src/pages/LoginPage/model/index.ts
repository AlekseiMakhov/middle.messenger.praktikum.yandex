import { model, loginFormChildren } from '../config';
import LoginPage from '../ui';

export const loginPageInit = (root: HTMLElement) => {
  const page = new LoginPage(loginFormChildren, model);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
