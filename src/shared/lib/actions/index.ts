import { handleForm, TValidationOption, validate } from '../Validator';
import { cloneDeep } from '../cloneDeep';

export const blur = (e: FocusEvent, rules: TValidationOption[]) => {
  const target = e.target as HTMLInputElement;

  const v = validate()(target.value, rules);

  const errors = v.getErrors();

  if (errors.length) {
    target.classList.add('error');
    const parent = target.parentNode as HTMLElement;
    const error = parent.querySelector('.error-description') as HTMLElement;
    error.textContent = errors;
  }
};

export const focus = (e: FocusEvent) => {
  const target = e.target as HTMLInputElement;

  target.classList.remove('error');

  const parent = target.parentNode as HTMLElement;
  const description = parent.querySelector('.error-description') as HTMLElement;
  description.textContent = '';
};

export const click = (e: MouseEvent) => {
  console.log(e);
};

export const handleSubmit = (
  e: SubmitEvent,
  model: Record<string, string>,
  formElements: Record<string, unknown>[]
) => {
  e.preventDefault();

  const formModel = cloneDeep(model);

  const target = e.target as HTMLFormElement;
  const elements = Array.from(target.elements);

  return handleForm(elements, formModel, formElements);
};
