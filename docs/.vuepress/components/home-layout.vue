<template>
  <div class="home-page">
    <div class="side-bar">
      <div class="side-bar-top">
        <div class="portrait-wrapper">
          <div class="portrait-img">
            <img class="img" src="/wendys-site/logo.jpg" alt="">
          </div>
          <div class="blog-user-name">{{ userName }}</div>
        </div>
      </div>
      <div class="side-bar-bottom">
        <h3 class="title">标签</h3>
        <ul class="list">
          <li class="list-item" v-for="tag in tags" v-if="tag">
            <a href="javascript:void(0)">{{ tag.tag }}</a>
          </li>
        </ul>
        <h3 class="title">档案</h3>
        <ul class="list">
          <li class="list-item" v-for="page in pages" v-if="page.frontmatter.lastUpdated">
            <a href="javascript:void(0)">{{ page.frontmatter.lastUpdated }}</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="content">
      <div class="blog-wrapper" v-for="page in pages" v-if="page.frontmatter.description">
        <h1 class="title"><a :href="'/wendys-site' + page.path">{{ page.title }}</a></h1>
        <p class="description">{{ page.frontmatter.description }}</p>
        <p class="info">
          <span class="last-update">更新时间：{{ getDateTime(page.lastUpdated) }}</span>
          <span>标签：#{{page.frontmatter.tag}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-layout',
  computed: {
    userName() {
      return this.$site.pages.find(page => page.title === 'Home').frontmatter.userName;
    },
    pages() {
      return this.$site.pages;
    },
    tags() {
      const tags = [];
      const tagsMap = {};
      this.$site.pages.forEach(page => {
        const tag = page.frontmatter.tag;
        if (tag && !tagsMap[tag]) {
          tags.push({tag: tag});
          tagsMap[tag] = tag;
        }
      });
      return tags;
    }
  },
  methods: {
    getDateTime(date = new Date()) {
      return (new Date(date)).toLocaleString();
    }
  },
}
</script>

<style lang="stylus" scoped>
.list {
  list-style: none;
}
.home-page {
  display: flex;
  padding: 20px;
  // background: #f5f7f9;
  .content:not(.custom) > *:first-child {
    margin-top: 0;
  }
}
.side-bar {
  min-width: 200px;
  margin-right: 20px;
  .side-bar-bottom,
  .side-bar-top {
    padding: 20px;
    border: 1px solid #2fd085;
    border-radius: 8px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .portrait-wrapper {
    text-align: center;
  }
  .portrait-img {
    width: 126px;
    height: 126px;
    margin: 0 auto 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .side-bar-bottom {
    .title {
      font-size: 14px;
      color: #585656;
    }
    .list-item {
      font-size: 14px;
    }
  }
}
.content {
  max-width: 100%;
  min-height: 700px;
  flex: 1;
  border: 1px solid #2fd085;
  border-radius: 8px;
  .blog-wrapper {
    .title {
      font-size: 18px;
      border-bottom: 1px solid #d9d6d6;
      padding: 5px 0;
    }
    .info {
      color: #828181;
      font-size: 12px;
      .last-update {
        margin-right: 10px;
      }
    }
  }
}

@media (max-width: 719px) {
  .home-page {
    // flex-direction: column;
    .side-bar {
     display: none;
      
    }
  }
}
</style>

