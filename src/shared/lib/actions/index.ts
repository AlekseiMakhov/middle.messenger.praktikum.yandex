import { TValidationOption, validate } from '../Validator';

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
  // e.preventDefault();
  console.log(e);
};
