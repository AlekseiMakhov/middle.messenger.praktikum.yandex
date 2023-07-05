import { TValidationOption, validate } from './validate';

export const handleForm = (
  elements: Element[],
  model: Record<string, string>,
  formElements: Record<string, unknown>[],
) => {
  elements.forEach((el: Element & { value?: string }) => {
    const name = el.getAttribute('name');
    const { value } = el;

    if (!name || value === undefined) {
      return;
    }

    if (name in model) {
      model[name] = value;
    }
  });
  const errors: string[] = [];

  const v = validate();

  Object.entries(model)
    .forEach(([key, value]) => {
      const elemConfig = formElements
        .find((el: Record<string, unknown>) => el.name === key);

      if (!elemConfig) {
        return;
      }

      const validationOptions = elemConfig.validation as TValidationOption[];

      if (!validationOptions) {
        return;
      }

      const check = v(value as string, validationOptions);

      const elemErrors = check.getErrors(model);

      if (elemErrors) {
        errors.push(`${elemConfig.label}: ${elemErrors}`);
      }
    });

  return {
    model,
    errors,
  };
};
