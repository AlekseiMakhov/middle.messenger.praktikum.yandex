import Page from "../ui";
import { props } from "../config";

export const nofFoundPageInit = (root: HTMLElement) => {
  const page = new Page(props);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);
};
