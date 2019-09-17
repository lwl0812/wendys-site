const fs = require('fs');
const path = require('path');
const currentPath = __dirname;
const marked = require('marked');
var yamlFront = require('yaml-front-matter');

//解析需要遍历的文件夹
const targetFilePath = path.resolve('./docs/blog/');

const _isMarkdownFile = fileName => {
  const pattern = /.*\.md$/g;
  // console.log(pattern.test(fileName), fileName)
  return pattern.test(fileName);
};

const _getDirArray = (fileDir, currentPath) => {
  const newFileDir = fileDir.replace(currentPath, '');
  return newFileDir.split('/');
};

let router = [
  {
    text: '首页',
    link: '/',
  },
];
let routerNameMap = {
  'front-end': '前端相关',
  'other-resources': '其他资源',
  javascript: 'JavaScript',
  tools: '工具类',
  vscode: 'vscode',
  'develop-related': '开发相关',
  'effective-front-end': '高效前端学习笔记',
  'interview-related': '面试相关',
  'leet-code': 'Leetcode算法',
  'knowledge-system': '前端知识体系',
  'relearn-front-end': '重学前端',
  'teach-yourself-regular-expression-in-10-minutes': '正则表达式必知必会',
  'source-code': '源码阅读',
  lodash: 'lodash',
  algorithm: '算法',
  'aha-algorithm': '啊哈，算法',
  english: '英语学习',
  'tem8-high-frequency-vocabulary': '八级高频词汇',
  'computer-lexicon': '计算机词汇',
  vue: 'Vue',
  'vue-source-code': 'Vue 源码揭秘笔记',
  'the-big-bang': '生活大爆炸',
  'comic-algorithm': '漫画算法',
  'beauty-of-data-structure-and-algorithm': '数据结构与算法之美',
  http: 'HTTP',
  'http-with-pics': '图解 HTTP',
};

const fileTraverse = filePath => {
  // 根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);
  // 遍历读取到的文件列表
  files.forEach(fileName => {
    // 获取当前文件的绝对路径
    var fileDir = path.join(filePath, fileName);
    // 根据文件路径获取文件信息，返回一个fs.Stats对象
    let stats = fs.statSync(fileDir);
    var isFile = stats.isFile(); // 是文件
    var isDir = stats.isDirectory(); // 是文件夹
    if (isFile && _isMarkdownFile(fileName)) {
      const content = yamlFront.loadFront(fs.readFileSync(fileDir));
      const dirArray = _getDirArray(fileDir, targetFilePath);
      const indexMap = {};
      let _router = router;
      let concatLink = '/blog';
      let text;
      if (content.public) {
        dirArray.forEach((dir, index) => {
          if (dir) {
            let link = `/${dir}`;
            concatLink += link;
            if (index === 1) {
              // 第一个
              const _index = _router.findIndex(r => r.link === concatLink);
              if (_index > -1) {
                _router = _router[_index];
              } else {
                _router.push({
                  text: routerNameMap[dir] || content._title,
                  link: concatLink,
                  items: [],
                });
                _router = _router[_router.length - 1];
              }
            }
            if (index === 2) {
              // 第二个
              const _index = _router.items.findIndex(r => r.link === concatLink);
              if (_index > -1) {
                _router = _router.items[_index];
              } else {
                _router.items.push({
                  text: routerNameMap[dir] || content._title,
                  link: concatLink,
                  items: [],
                });
                _router = _router.items[_router.items.length - 1];
              }
            }
            if (index === dirArray.length - 1) {
              // 最后一个
              text = content._title;
              const _index = _router.items.findIndex(r => r.link === concatLink);
              if (_index < 0 && text) {
                _router.items.push({
                  text: routerNameMap[dir] || content._title,
                  link: concatLink,
                });
              }
            }
          }

          // if (dir) {
          //   let link;
          //   if (index !== dirArray.length - 1) { // 不是最后一个
          //     link = `/${dir}`;
          //   }
          //   else { // 最后一个
          //     link = `/${dir}`;
          //     text = content._title;
          //   }
          //   concatLink += link;

          //   if (index === 1) {
          //     const _index = _router.findIndex(r => r.link === concatLink);
          //     if (_index > -1) {
          //       _router = _router[_index];
          //     } else {
          //       _router.push({
          //         text: routerNameMap[dir] || text,
          //         link: concatLink,
          //         items: [],
          //       });
          //       _router = _router[_router.length - 1];
          //     }
          //   }
          //   else {
          //     const _index = _router.items.findIndex(r => r.link === concatLink);
          //     if (_index > -1) {
          //       _router = _router.items[_index];
          //     } else {
          //       _router.items.push({
          //         text: routerNameMap[dir] || text,
          //         link: concatLink,
          //         items: [],
          //       });
          //       _router = _router.items[_router.items.length - 1];
          //     }
          //   }
          // }
        });
      }
    }
    if (isDir) {
      fileTraverse(fileDir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
};

fileTraverse(targetFilePath);

module.exports = {
  router,
};

// function readdir(filePath) {
//   return new Promise((resolve,reject)=>{
//     fs.readdir(filePath, (err, files) => {
//       if(err)return reject(err)
//       resolve(files);
//     });
//   });
// }

// function filestat(filedir) {
//   return new Promise((resolve,reject)=>{
//     fs.stat(filedir,function(err, stats){
//       if(err)return reject(err)
//       resolve(stats);
//     });
//   });
// }

// /**
//  * 文件遍历方法
//  * @param filePath 需要遍历的文件路径
//  */
// const fileTraverse = async (filePath) => {
//   //根据文件路径读取文件，返回文件列表
//   let files = await readdir(filePath);
//   console.log(files)
//       //遍历读取到的文件列表
//       for(let filename of files) {
//         //获取当前文件的绝对路径
//         var filedir = path.join(filePath, filename);
//         //根据文件路径获取文件信息，返回一个fs.Stats对象
//         let stats = await filestat(filedir);
//             var isFile = stats.isFile();//是文件
//             var isDir = stats.isDirectory();//是文件夹
//             if(isFile && _isMarkdownFile(filename)){
//               // console.log(filedir);
//               const dirArray = _getDirArray(filedir, targetFilePath);
//               // console.log(dirArray)
//               const indexMap = {}
//               let routerArray = router;
//               dirArray.forEach((dir, index) => {
//                 if (dir) {
//                   const link = `/${dir}/`;
//                   if (index === 1) {
//                     indexMap[index] = routerArray.findIndex(r => r.link === link);
//                     console.log(index, indexMap[index])
//                     if (indexMap[index] > -1) {

//                     } else {
//                       routerArray.push({
//                         text: routerNameMap[dir],
//                         link: link,
//                       });
//                     }
//                   }
//                 }
//               });
//             }
//             if(isDir){
//               await fileTraverse(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
//             }
//       }
//   console.log(router, 33);
// }

// //调用文件遍历方法
// // (async ()=>{
// //   await fileTraverse(targetFilePath);
// //   console.log(router, 1)
// // })();

// async function getRouter() {
//   await fileTraverse(targetFilePath);
//   return router;
// }
