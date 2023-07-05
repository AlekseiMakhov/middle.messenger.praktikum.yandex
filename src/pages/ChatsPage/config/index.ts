import { Props } from '../types';
import {
  ButtonProps,
  LinkProps,
  MessageInputProps,
  MessageProps,
  SearchProps,
} from '../../../shared/ui';
import { TActions } from '../../../shared/lib';

export const model = {
  message: '',
};

export const chatGroups = [
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hiфыупафылдм одфвр морф млорфв амлодф млорфц кдлмирф цклм!',
    name: 'Вася',
    count: '6',
    avatar: {
      // eslint-disable-next-line max-len
      src: 'data:image/png;base64,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',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB90WLFLbPsK4w3AzDg2D2Uxvl2g8Jt2QRPQ&usqp=CAU',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group chat-group_selected',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    name: 'Вася',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
  {
    component: 'ChatGroup',
    attrs: {
      class: 'chat-group',
    },
    timestamp: '12:34',
    text: 'Hi!',
    name: 'Вася',
    count: '6',
    avatar: {
      src: '',
      alt: 'Вася',
    },
  },
];

const search: SearchProps = {
  component: 'Search',
  attrs: {
    class: 'search chat-search',
  },
};

const profileLink: LinkProps = {
  component: 'Link',
  attrs: {
    class: 'link-container profile-link',
  },
  href: '/profile',
  label: 'Jason Statham >',
};

export const messageInput: MessageInputProps = {
  component: 'MessageInput',
  attrs: {
    class: 'message-input',
  },
  name: 'message',
  validation: [
    {
      name: TActions.REQUIRED,
    },
  ],
};

const messageSendButton: ButtonProps = {
  component: 'Button',
  attrs: {
    class: 'button button_arrow',
    type: 'submit',
  },
  label: '>',
};

const group = {
  avatar: {
    // eslint-disable-next-line max-len
    src: 'data:image/jpeg;base64,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',
    alt: '',
  },
  name: 'Васян',
};

const messages: MessageProps[] = [
  {
    component: 'Message',
    attrs: {
      class: 'message',
    },
    timestamp: '12:56',
    text: 'Привет! Как у тебя дела?',
  },
  {
    component: 'Message',
    attrs: {
      class: 'message message_own',
    },
    timestamp: '12:57',
    text: 'Привет! Всё отлично, спасибо! Как сам?',
  },
  {
    component: 'Message',
    attrs: {
      class: 'message',
    },
    timestamp: '13:21',
    text: 'Тоже хорошо! Планируешь что-нибудь интересное на выходные?',
  },
  {
    component: 'Message',
    attrs: {
      class: 'message message_own',
    },
    timestamp: '13:23',
    text: 'Да, я собираюсь с друзьями поехать на пикник. Наконец-то хорошая погода!',
  },
];

export const props = <Props>{
  attrs: {
    class: '',
  },
  group,
};

export const messageSendFormChildren = {
  messageSendForm: {
    component: 'Form',
    model,
    attrs: {
      class: 'chat-message',
      novalidate: true,
      name: 'message-send',
    },
    children: {
      formElements: [messageInput],
      confirmButton: messageSendButton,
    },
  },
  chatGroups,
  search,
  profileLink,
  messages,
};
