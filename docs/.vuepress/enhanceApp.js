function integrateGitalk(router) {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);

  router.afterEach((to) => {
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        loadGitalk(to);
      }
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }
  function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
      repo: 'wendys-site',
      owner: 'lwl0812',
      admin: ['lwl0812'],
      id: 'comment',
      distractionFreeMode: false,
      language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
  }
}

function addBaiduTongji() {
  let _hmt = _hmt || [];
  let hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0ab7c7b698bcb0bf87628f079a988818";
  let s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
}

export default ({Vue, options, router}) => {
  try {
    document && integrateGitalk(router);
    document && addBaiduTongji();
  } catch (e) {
    console.error(e.message);
  }
}