import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'lbk-google-analytics',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  routes: [
    {
      path: '/',
      redirect: '/register',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
    },
    {
      name: '注册',
      path: '/register',
      component: './Register',
    },
  ],
  npmClient: 'yarn',
  analytics: {
    ga: 'https://www.googletagmanager.com/gtag/js?id=G-09QMDH7WVW',
  },
  headScripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-09QMDH7WVW',
    },
    `window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-09QMDH7WVW');`,
  ],
});
