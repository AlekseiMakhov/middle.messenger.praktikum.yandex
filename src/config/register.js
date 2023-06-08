export default {
  inputs: [
    {
      id: 'mail',
      placeholder: 'Почта',
      type: 'email',
      label: 'Почта',
    },
    {
      id: 'login',
      placeholder: 'Логин',
      type: 'text',
      label: 'Логин',
    },
    {
      id: 'first_name',
      placeholder: 'Имя',
      type: 'text',
      label: 'Имя',
    },
    {
      id: 'second_name',
      placeholder: 'Фамилия',
      type: 'text',
      label: 'Фамилия',
    },
    {
      id: 'phone',
      placeholder: '+7 (777) 777 7777',
      type: 'phone',
      label: 'Телефон',
    },
    {
      id: 'password',
      placeholder: 'Пароль',
      type: 'password',
      label: 'Пароль',
      autocomplete: false,
    },
    {
      id: 'confirm_password',
      placeholder: 'Пароль (подтвердить)',
      type: 'password',
      label: 'Подтверждение пароля',
      autocomplete: false,
    },
  ],
  confirm: {
    label: 'Зарегистрироваться',
  },
  link: {
    label: 'Войти',
    href: '/login',
  },
};
