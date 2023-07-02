import { ButtonProps, HeaderProps } from '../../../shared/ui';
import { LoginProps } from '../types';
import { TActions } from '../../../shared/lib';

export const formElements = [
  {
    component: 'Input',
    attrs: {
      class: 'input',
    },
    id: 'login',
    name: 'login',
    label: 'Логин',
    autocomplete: true,
    validation: [
      {
        name: TActions.MAX_LENGTH,
        options: 20,
      },
      {
        name: TActions.MIN_LENGTH,
        options: 3,
      },
      {
        name: TActions.PATTERN,
        description:
        // eslint-disable-next-line max-len
          'Латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
        options: /^(?=.*[A-Za-z])(?!^\d+$)[A-Za-z\d_-]+$/,
      },
    ],
  },
  {
    component: 'Input',
    attrs: {
      class: 'input',
    },
    id: 'password',
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
    ],
  },
];

const header = <HeaderProps>{
  component: 'Header',
  attrs: {
    class: 'header mb-70',
  },
  label: 'Вход',
};

const confirmButton = <ButtonProps>{
  component: 'Button',
  attrs: {
    class: 'button',
    type: 'submit',
  },
  label: 'Войти',
};

const link = {
  component: 'Link',
  attrs: {
    class: 'link-container',
  },
  href: '/register',
  label: 'Зарегистрироваться',
};

export const loginProps = <LoginProps>{
  attrs: {
    class: 'login-form',
  },
};

export const children = {
  formElements,
  header,
  confirmButton,
  link,
};
