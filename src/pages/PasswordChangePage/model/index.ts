import { handleForm } from "../../../shared/lib";
import Page from "../ui";
import { formElements, props } from "../config";

export const passwordChangePageInit = (root: HTMLElement) => {
  const page = new Page(props);

  const fragment = page.render();
  page.dispatchMounted();
  root.append(fragment);

  const form = root.querySelector("form");

  if (!form) {
    return;
  }

  const model: Record<string, string> = {
    password: "",
    confirm_password: "",
  };

  handleForm(model, form, formElements);
};
