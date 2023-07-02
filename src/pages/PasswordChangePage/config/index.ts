import { ButtonProps, HeaderProps } from '../../../shared/ui';
import { Props } from '../types';
import { TActions, TValidationOption } from '../../../shared/lib';

export const formElements = [
  {
    component: 'Input',
    id: 'password',
    attrs: {
      class: 'input',
    },
    name: 'password',
    type: 'password',
    label: 'Пароль',
    autocomplete: true,
    validation: [
      {
        name: TActions.MAX_LENGTH,
        options: 40,
      },
      {
        name: TActions.MIN_LENGTH,
        options: 8,
      },
      {
        name: TActions.PATTERN,
        description: 'Обязательно хотя бы одна заглавная буква и цифра',
        options: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d-]+$/,
      },
    ] as TValidationOption[],
  },
  {
    component: 'Input',
    id: 'confirm_password',
    attrs: {
      class: 'input',
    },
    name: 'confirm_password',
    type: 'password',
    label: 'Повторите пароль',
    autocomplete: true,
    validation: [
      {
        name: TActions.MAX_LENGTH,
        options: 40,
      },
      {
        name: TActions.MIN_LENGTH,
        options: 8,
      },
      {
        name: TActions.PATTERN,
        description: 'Обязательно хотя бы одна заглавная буква и цифра',
        options: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d-]+$/,
      },
      {
        name: TActions.IS_EQUAL,
        description: 'Пароль',
        options: 'password',
      },
    ] as TValidationOption[],
  },
];

const header = <HeaderProps>{
  component: 'Header',
  attrs: {
    class: 'header mb-70',
  },
  label: 'Ввод нового пароля',
};

const confirmButton = <ButtonProps>{
  component: 'Button',
  attrs: {
    class: 'button',
    type: 'submit',
  },
  label: 'Применить',
};

const link = {
  component: 'Link',
  attrs: {
    class: 'link-container',
  },
  href: '/profile',
  label: 'Назад',
};

export const props = <Props>{
  attrs: {
    class: 'form',
  },
};

export const children = {
  formElements,
  header,
  confirmButton,
  link,
};
