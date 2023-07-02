import { elements, props } from '../config';
import Page from '../ui';
import { handleForm } from '../../../shared/lib';

export const profileChangePageInit = (root: HTMLElement) => {
  const page = new Page(props);

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
    phone: '',
    first_name: '',
    second_name: '',
    display_name: '',
  };

  handleForm(model, form, elements);
};
