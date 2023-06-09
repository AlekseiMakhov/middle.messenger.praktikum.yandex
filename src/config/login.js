export default {
  inputs: [
    {
      id: 'login',
      name:'login',
      placeholder: '',
      type: 'text',
      class: 'input',
      label: 'Логин',
      wrapperClass: 'input',
    },
    {
      id: 'password',
      name: 'password',
      placeholder: '',
      type: 'password',
      label: 'Пароль',
      class: 'input',
      wrapperClass: 'input',
      max: 20,
      min: 8,
      pattern: /[\w]+/,
      autocomplete: true,
    },
  ],
  confirm: {
    label: 'Войти',
    id: 'log-in',
  },
  link: {
    label: 'Перейти к регистрации',
    href: '/register',
  },
};
