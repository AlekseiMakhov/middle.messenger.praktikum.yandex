import { ButtonProps, HeaderProps } from "../../../shared/ui";
import { RegisterProps } from "../types";
import { TActions, TValidationOption } from "../../../shared/lib";

export const formElements = [
  {
    component: "Input",
    attrs: {
      class: "input",
    },
    label: "Почта",
    id: "email",
    name: "email",
    placeholder: "Email@test.test",
    type: "email",
    autocomplete: true,
    validation: [
      {
        name: TActions.PATTERN,
        description:
          "Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
        options:
          /^(?:(?:[^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:\s*\".+\"))@(?:[^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,}$/,
      },
    ] as TValidationOption[],
  },
  {
    component: "Input",
    id: "login",
    attrs: {
      class: "input",
    },
    name: "login",
    placeholder: "Одуванчик35",
    label: "Логин",
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
          "Латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)",
        options: /^(?=.*[A-Za-z])(?!^\d+$)[A-Za-z\d_-]+$/,
      },
    ] as TValidationOption[],
  },
  {
    component: "Input",
    id: "first_name",
    attrs: {
      class: "input",
    },
    name: "first_name",
    placeholder: "Иннокентий",
    label: "Имя",
    autocomplete: true,
    validation: [
      {
        name: TActions.PATTERN,
        description:
          "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)",
        options: /^(?:[А-ЯA-Z][А-ЯЁA-Zёа-яa-z-]*|Ё[А-ЯЁA-Zа-яa-z-]*)$/,
      },
    ] as TValidationOption[],
  },
  {
    component: "Input",
    id: "second_name",
    attrs: {
      class: "input",
    },
    name: "second_name",
    placeholder: "Смоктуновский",
    label: "Фамилия",
    autocomplete: true,
    validation: [
      {
        name: TActions.PATTERN,
        description:
          "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)",
        options: /^(?:[А-ЯA-Z][А-ЯЁA-Zёа-яa-z-]*|Ё[А-ЯЁA-Zа-яa-z-]*)$/,
      },
    ] as TValidationOption[],
  },
  {
    component: "Input",
    id: "phone",
    attrs: {
      class: "input",
    },
    name: "phone",
    placeholder: "+74950000000",
    type: "phone",
    label: "Телефон",
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
        description: "Состоит из цифр, может начинается с плюса",
        options: /^\+?\d+$/,
      },
    ] as TValidationOption[],
  },
  {
    component: "Input",
    id: "password",
    attrs: {
      class: "input",
    },
    name: "password",
    type: "password",
    label: "Пароль",
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
        description: "Обязательно хотя бы одна заглавная буква и цифра",
        options: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d-]+$/,
      },
    ] as TValidationOption[],
  },
  {
    component: "Input",
    id: "confirm_password",
    attrs: {
      class: "input",
    },
    name: "confirm_password",
    type: "password",
    label: "Повторите пароль",
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
        description: "Обязательно хотя бы одна заглавная буква и цифра",
        options: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d-]+$/,
      },
      {
        name: TActions.IS_EQUAL,
        description: "Пароль",
        options: "password",
      },
    ] as TValidationOption[],
  },
];

const header = <HeaderProps>{
  component: "Header",
  attrs: {
    class: "header mb-70",
  },
  label: "Регистрация",
};

const confirmButton = <ButtonProps>{
  component: "Button",
  attrs: {
    class: "button",
    type: "submit",
  },
  label: "Зарегистрироваться",
};

const link = {
  component: "Link",
  attrs: {
    class: "link-container",
  },
  href: "/login",
  label: "Войти",
};

export const registerProps = <RegisterProps>{
  attrs: {
    class: "register-form",
  },
};

export const children = {
  formElements,
  header,
  confirmButton,
  link,
};
