module.exports = {
  base: '/wendys-site/',
  title: '晴天&Sunny',
  // description: '晴天&Sunny',
  userName: '晴天&Sunny',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: 'auto',
    // navbar: false,
    nav: [
      { 
        text: '首页',
        link: '/'
      },
      {
        text: '前端相关',
        link: '/front-end/',
        items: [
          // {
          //   text: 'JavaScript',
          //   link: '/front-end/javascript/',
          //   items: [
          //     {
          //       text: 'JavaScript 面向对象学习笔记',
          //       link: '/front-end/javascript/object-oriented/',
          //     }
          //   ]
          // },
          // {
          //   text: 'CSS',
          //   link: '/css/'
          // },
          {
            text: '其他资源',
            link: '/other-resources/',
            items: [
              {
                text: '浏览器工作原理',
                link: '/other-resources/02.how-browsers-work.md'
              }
            ]
          }
        ]
      },
      // {
      //   text: '工具类',
      //   link: '/tools/'
      // },
      // {
      //   text: '收藏',
      //   link: '/resources/'
      // },
    ],
    // sidebar: [
    //   '/',
    //   '/page-a',
    //   ['/page-b', 'Explicit link text']
    // ],
    lastUpdated: 'Last Updated', // string | boolean
  }
}