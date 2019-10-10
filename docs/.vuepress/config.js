const router = require('./router/router.js');

module.exports = {
  base: '/wendys-site/',
  title: '狸子同学的秘密花园',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        crossorigin: 'anonymous',
        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
      },
    ],
  ],
  description: '狸子同学的秘密花园',
  userName: '狸子同学',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: 'auto',
    // navbar: false,
    nav: router.router,
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ],
    lastUpdated: 'Last Updated', // string | boolean
  },
};
