import { TValidationOption, validate } from "./validate";

export const handleForm = (
  model: Record<string, string>,
  form: HTMLFormElement,
  formElements: Record<string, unknown>[]
) => {
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const elements = Array.from(target.elements);

    elements.forEach((el: Element & { value?: string }) => {
      const name = el.getAttribute("name");
      const value = el.value;

      if (!name || value === undefined) {
        return;
      }

      if (name in model) {
        model[name] = value;
      }
    });

    let isValid = true;
    let formErrors: string[] = [];

    const v = validate();

    Object.entries(model).forEach(([key, value]) => {
      const elemConfig = formElements.find((el) => el.name === key);

      if (!elemConfig) {
        return;
      }

      const validationOptions = elemConfig.validation as TValidationOption[];

      if (!validationOptions) {
        return;
      }

      const check = v(value, validationOptions);

      const elemErrors = check.getErrors({ ...model });

      if (elemErrors) {
        formErrors.push(`${elemConfig.label}: ${elemErrors}`);
      }
    });

    if (formErrors.length > 0) {
      isValid = false;
    }

    if (!isValid) {
      console.error(formErrors.join("\n"));
    } else {
      console.log(model);
    }
  });
};
