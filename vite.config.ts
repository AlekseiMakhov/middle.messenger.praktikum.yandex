// import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import handlebars from './vite-plugin-hbs-precompile.ts';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  assetsInclude: ['**/*.hbs', '**/*.handlebars', '**/*.css'],
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {},
  },
  plugins: [
    tsconfigPaths({
      root: './',
      loose: true,
    }),

    handlebars(),

    // handlebars({
    //   context: {
    //     currentPage: 'index.html',
    //     login: 'login',
    //     chat: './chat.html',
    //     loginPage: {
    //       inputs: [
    //         {
    //           id: 'login',
    //           placeholder: 'Логин',
    //           type: 'text',
    //           label: 'Логин',
    //         },
    //         {
    //           id: 'password',
    //           placeholder: 'Пароль',
    //           type: 'password',
    //           label: 'Пароль',
    //         },
    //       ],
    //       confirm: {
    //         label: 'Войти',
    //       },
    //       link: {
    //         label: 'Перейти к регистрации',
    //         href: '/',
    //       },
    //     },
    //     registerPage: {
    //       inputs: [
    //         {
    //           id: 'mail',
    //           placeholder: 'Почта',
    //           type: 'email',
    //           label: 'Почта',
    //         },
    //         {
    //           id: 'login',
    //           placeholder: 'Логин',
    //           type: 'text',
    //           label: 'Логин',
    //         },
    //         {
    //           id: 'first_name',
    //           placeholder: 'Имя',
    //           type: 'text',
    //           label: 'Имя',
    //         },
    //         {
    //           id: 'last_name',
    //           placeholder: 'Фамилия',
    //           type: 'text',
    //           label: 'Фамилия',
    //         },
    //         {
    //           id: 'phone',
    //           placeholder: '+7 (777) 777 7777',
    //           type: 'phone',
    //           label: 'Телефон',
    //         },
    //         {
    //           id: 'password',
    //           placeholder: 'Пароль',
    //           type: 'password',
    //           label: 'Пароль',
    //         },
    //         {
    //           id: 'confirm_password',
    //           placeholder: 'Пароль (подтвердить)',
    //           type: 'password',
    //           label: 'Подтверждение пароля',
    //         },
    //       ],
    //       confirm: {
    //         label: 'Зарегистрироваться',
    //       },
    //       link: {
    //         label: 'Войти',
    //         href: '/',
    //       },
    //     },
    //   },
    //   partialDirectory: resolve(__dirname, 'src/partials'),
    // }) as Plugin,
  ],
});
