import RegisterPage from '../ui';
import { model, registerFormChildren } from '../config';

export const registerPageInit = (root: HTMLElement) => {
  const page = new RegisterPage(registerFormChildren, model);

  const fragment = page.render();

  root.append(fragment);
  page.dispatchMounted();
};
