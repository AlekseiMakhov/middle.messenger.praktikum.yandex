export default {
  inputs: [
    {
      id: 'email',
      name: 'email',
      placeholder: '',
      type: 'email',
      label: 'Почта',
      wrapperClass: 'input input_row',
    },
    {
      id: 'login',
      name: 'login',
      placeholder: '',
      type: 'text',
      label: 'Логин',
      wrapperClass: 'input input_row',
    },
    {
      id: 'first_name',
      name: 'first_name',
      placeholder: '',
      type: 'text',
      label: 'Имя',
      wrapperClass: 'input input_row',
    },
    {
      id: 'second_name',
      name: 'second_name',
      placeholder: '',
      type: 'text',
      label: 'Фамилия',
      wrapperClass: 'input input_row',
    },
    {
      id: 'display_name',
      name: 'display_name',
      placeholder: '',
      type: 'text',
      label: 'Имя в чате',
      wrapperClass: 'input input_row',
    },
    {
      id: 'phone',
      name: 'phone',
      placeholder: '',
      type: 'phone',
      label: 'Телефон',
      wrapperClass: 'input input_row',
    },
  ],
  buttons: [
    {
      id: 'change-profile',
      label: 'Изменить данные',
      class: 'button button_link p-0 a-s-s',
    },
    {
      id: 'change-password',
      label: 'Изменить пароль',
      class: 'button button_link p-0 a-s-s',
    },
    {
      id: 'exit',
      label: 'Выйти',
      class: 'button button_link button_red p-0 a-s-s',
    },
  ],
};
