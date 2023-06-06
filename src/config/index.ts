export default {
  loginPage: {
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
      },
    ],
    confirm: {
      label: 'Войти',
    },
    link: {
      label: 'Перейти к регистрации',
      href: '/',
    },
  },
  registerPage: {
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
        id: 'last_name',
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
      },
      {
        id: 'confirm_password',
        placeholder: 'Пароль (подтвердить)',
        type: 'password',
        label: 'Подтверждение пароля',
      },
    ],
    confirm: {
      label: 'Зарегистрироваться',
    },
    link: {
      label: 'Войти',
      href: '/',
    },
  },
};
