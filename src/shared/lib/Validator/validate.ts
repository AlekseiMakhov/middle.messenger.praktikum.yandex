// eslint-disable-next-line no-shadow
export const enum TActions {
  MAX_LENGTH = 'validateMaxLength',
  MIN_LENGTH = 'validateMinLength',
  PATTERN = 'validatePattern',
  REQUIRED = 'validateIsRequired',
  IS_EQUAL = 'validateIsEqual',
}

export type TValidationOption = {
  name: TActions;
  options?: string | number | RegExp;
  description?: string;
};

export const validate = () => {
  let errors: string = '';

  return (value: string, rules: TValidationOption[]) => {
    const actions = {
      validateMaxLength: (rule: TValidationOption): string => {
        if (value.length > <number>rule.options) {
          return `Длина не должна быть больше ${rule.options}`;
        }
        return '';
      },

      validateMinLength: (rule: TValidationOption): string => {
        if (value.length < <number>rule.options) {
          return `Длина не должна быть меньше ${rule.options}`;
        }
        return '';
      },

      validatePattern: (rule: TValidationOption): string => {
        if (!(rule.options as RegExp).test(value)) {
          return rule.description as string;
        }
        return '';
      },

      validateIsRequired: () => {
        if (value === null || value === undefined || value === '') {
          return 'Поле не должно быть пустым';
        }
        return '';
      },

      validateIsEqual: (
        rule: TValidationOption,
        model: Record<string, string>,
      ) => {
        if (!model) {
          return '';
        }

        const srcValue = model[rule.options as string];

        if (!srcValue) {
          return '';
        }

        if (value !== srcValue) {
          return `Значение должно совпадать со значением поля ${rule.description}`;
        }
        return '';
      },
    };

    const getErrors = (model: Record<string, string> = {}) => {
      const tmpErrors: string[] = [];

      rules.forEach((rule: TValidationOption) => {
        const error = actions[rule.name](rule, model);

        if (error.length) {
          tmpErrors.push(error);
        }
      });

      errors = tmpErrors.join(', ');

      return errors;
    };

    return {
      getErrors,
    };
  };
};
