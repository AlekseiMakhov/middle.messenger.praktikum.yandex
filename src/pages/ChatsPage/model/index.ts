import Page from '../ui';
import { messageSendFormChildren, model } from '../config';

export const chatPageInit = (root: HTMLElement) => {
  const page = new Page(messageSendFormChildren, model);

  const fragment = page.render();

  page.dispatchMounted();
  root.append(fragment);
};
