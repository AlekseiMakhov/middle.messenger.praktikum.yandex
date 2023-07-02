import { props, messageInput } from '../config';
import Page from '../ui';
import { handleForm } from '../../../shared/lib';

export const chatPageInit = (root: HTMLElement) => {
  const page = new Page(props);

  const fragment = page.render();

  page.dispatchMounted();
  root.append(fragment);

  const form = root.querySelector('form');

  if (!form) {
    return;
  }

  const formElements = [messageInput];

  const model: Record<string, string> = {
    message: '',
  };

  handleForm(model, form, formElements);
};
