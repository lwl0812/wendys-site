const router = require('./router/router.js');

module.exports = {
  base: '/wendys-site/',
  title: 'Wendy\'s one peace',
  head: [
    ['link',
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css',
        crossorigin: 'anonymous',
        integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf',
      }
    ]
  ],
  // description: '晴天&Sunny',
  userName: 'Wendy Lu',
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
  }
};