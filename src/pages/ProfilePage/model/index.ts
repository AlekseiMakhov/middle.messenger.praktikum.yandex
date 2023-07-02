import { props } from '../config';
import ProfilePage from '../ui';

export const profilePageInit = (root: HTMLElement) => {
  const page = new ProfilePage(props);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
