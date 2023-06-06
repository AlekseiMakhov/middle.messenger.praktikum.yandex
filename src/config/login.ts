export default {
  inputs: [
    {
      id: 'login',
      placeholder: 'Логин',
      type: 'text',
      label: 'Логин',
    },
    {
      id: 'password',
      placeholder: 'Пароль',
      type: 'password',
      label: 'Пароль',
      min: 8,
      pattern: /[\w]+/,
      autocomplete: true,
    },
  ],
  confirm: {
    label: 'Войти',
  },
  link: {
    label: 'Перейти к регистрации',
    href: '/register',
  },
};
