import { Props } from '../types';
import { AvatarProps } from '../../../shared/ui';
import { TActions, TValidationOption } from '../../../shared/lib';

export const elements = [
  {
    component: 'Input',
    attrs: {
      class: 'input',
    },
    label: 'Почта',
    id: 'email',
    name: 'email',
    type: 'email',
    value: 'mail@test.test',
    autocomplete: true,
    validation: [
      {
        name: TActions.PATTERN,
        description:
        // eslint-disable-next-line max-len
          'Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.',
        options:
        // eslint-disable-next-line max-len
          /^(?:(?:[^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|(?:\s*\'.+\'))@(?:[^<>()\[\]\\.,;:\s@']+\.)+[^<>()\[\]\\.,;:\s@']{2,}$/,
      },
    ] as TValidationOption[],
  },
  {
    component: 'Input',
    id: 'login',
    attrs: {
      class: 'input',
    },
    name: 'login',
    label: 'Логин',
    value: 'chosen-one',
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
    ] as TValidationOption[],
  },
  {
    component: 'Input',
    id: 'first_name',
    attrs: {
      class: 'input',
    },
    name: 'first_name',
    value: 'Jason',
    label: 'Имя',
    autocomplete: true,
    validation: [
      {
        name: TActions.PATTERN,
        description:
        // eslint-disable-next-line max-len
          'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
        options: /^(?:[А-ЯA-Z][А-ЯЁA-Zёа-яa-z-]*|Ё[А-ЯЁA-Zа-яa-z-]*)$/,
      },
    ] as TValidationOption[],
  },
  {
    component: 'Input',
    id: 'second_name',
    attrs: {
      class: 'input',
    },
    name: 'second_name',
    value: 'Statham',
    label: 'Фамилия',
    autocomplete: true,
    validation: [
      {
        name: TActions.PATTERN,
        description:
        // eslint-disable-next-line max-len
          'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
        options: /^(?:[А-ЯA-Z][А-ЯЁA-Zёа-яa-z-]*|Ё[А-ЯЁA-Zа-яa-z-]*)$/,
      },
    ] as TValidationOption[],
  },
  {
    component: 'Input',
    id: 'phone',
    attrs: {
      class: 'input',
    },
    name: 'phone',
    value: '+351910322031',
    type: 'phone',
    label: 'Телефон',
    autocomplete: true,
    validation: [
      {
        name: TActions.MAX_LENGTH,
        options: 15,
      },
      {
        name: TActions.MIN_LENGTH,
        options: 10,
      },
      {
        name: TActions.PATTERN,
        description: 'Состоит из цифр, может начинается с плюса',
        options: /^\+?\d+$/,
      },
    ] as TValidationOption[],
  },
  {
    component: 'Input',
    id: 'display_name',
    attrs: {
      class: 'input',
    },
    name: 'display_name',
    label: 'Имя в чате',
    value: 'chosen-one',
    autocomplete: true,
    validation: [],
  },
];

const avatar = <AvatarProps>{
  component: 'Avatar',
  attrs: {
    class: 'avatar-container mb-70',
  },
};

const link = {
  component: 'Link',
  attrs: {
    class: 'link-container',
  },
  href: '/profile',
  label: 'Назад',
};

const profileChangeConfirm = {
  component: 'Button',
  attrs: {
    class: 'button',
    type: 'submit',
  },
  label: 'Сохранить',
};

export const props = <Props>{
  attrs: {
    class: 'form-layout',
  },
};

export const children = {
  avatar,
  elements,
  profileChangeConfirm,
  link,
};
