const router = require('./router/router.js');
console.log(router, 11111)

module.exports = {
  base: '/wendys-site/',
  title: '晴天&Sunny',
  // description: '晴天&Sunny',
  userName: '晴天&Sunny',
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
}