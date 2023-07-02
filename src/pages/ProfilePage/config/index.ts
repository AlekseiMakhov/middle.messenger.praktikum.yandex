import { Props } from '../types';
import { AvatarProps } from '../../../shared/ui';

export const elements = [
  {
    attrs: {
      class: 'input input_row',
    },
    component: 'Input',
    id: 'email',
    name: 'email',
    disabled: true,
    type: 'email',
    label: 'Почта',
    value: 'email@test.test',
  },
  {
    component: 'Input',
    id: 'login',
    name: 'login',
    disabled: true,
    value: 'chosen-one',
    label: 'Логин',
    attrs: {
      class: 'input input_row',
    },
  },
  {
    component: 'Input',
    id: 'first_name',
    value: 'Jason',
    name: 'first_name',
    disabled: true,
    label: 'Имя',
    attrs: {
      class: 'input input_row',
    },
  },
  {
    component: 'Input',
    id: 'second_name',
    name: 'second_name',
    value: 'Statham',
    disabled: true,
    label: 'Фамилия',
    attrs: {
      class: 'input input_row',
    },
  },
  {
    component: 'Input',
    id: 'display_name',
    name: 'display_name',
    value: 'chosen-one',
    disabled: true,
    label: 'Имя в чате',
    attrs: {
      class: 'input input_row',
    },
  },
  {
    component: 'Input',
    id: 'phone',
    name: 'phone',
    value: '+351910234234',
    type: 'phone',
    disabled: true,
    label: 'Телефон',
    attrs: {
      class: 'input input_row',
    },
  },
];

const avatar = <AvatarProps>{
  component: 'Avatar',
  attrs: {
    class: 'avatar-container mb-70',
  },
};

const profileChangeLink = {
  component: 'Link',
  attrs: {
    class: 'button button_link p-0 a-s-s',
  },
  href: '/change-profile',
  label: 'Изменить данные',
};

const passwordChangeLink = {
  component: 'Link',
  attrs: {
    class: 'button button_link p-0 a-s-s',
  },
  href: '/change-password',
  label: 'Изменить пароль',
};

const logoutLink = {
  component: 'Link',
  attrs: {
    class: 'button button_link button_red p-0 a-s-s',
  },
  href: '/login',
  label: 'Выйти',
};

export const props = <Props>{
  attrs: {
    class: 'form-layout',
  },
};

export const children = {
  avatar,
  elements,
  profileChangeLink,
  passwordChangeLink,
  logoutLink,
};
