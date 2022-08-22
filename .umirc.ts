import { defineConfig } from '@umijs/max';

const gm =
  process.env.NODE_ENV === 'development' ? 'G-CXV4JMDJGZ' : 'G-ECL8CL8W0G';

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
    ga: `https://www.googletagmanager.com/gtag/js?id=${gm}`,
  },
  headScripts: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${gm}`,
    },
    `window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', "${gm}");`,
  ],
});
