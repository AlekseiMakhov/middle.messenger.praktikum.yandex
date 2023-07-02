import LoginPage, { formElements, loginProps } from '../index';
import { handleForm } from '../../../shared/lib';

export const loginPageInit = (root: HTMLElement) => {
  const page = new LoginPage(loginProps);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);

  const form = root.querySelector('form');

  if (!form) {
    return;
  }

  const model: Record<string, string> = {
    login: '',
    password: '',
  };

  handleForm(model, form, formElements);
};
