import RegisterPage, { formElements, registerProps } from '../index';
import { handleForm } from '../../../shared/lib';

export const registerPageInit = (root: HTMLElement) => {
  const page = new RegisterPage(registerProps);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);

  const form = root.querySelector('form');

  if (!form) {
    return;
  }

  const model: Record<string, string> = {
    login: '',
    email: '',
    password: '',
    phone: '',
    first_name: '',
    second_name: '',
    confirm_password: '',
  };

  handleForm(model, form, formElements);
};
