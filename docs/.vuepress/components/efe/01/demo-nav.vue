<template>
  <div class="demo1">
    <ul class="nav">
      <li class="nav-item item-home">首页</li>
      <li class="nav-item item-demo1">导航高亮</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo-nav',
};
</script>

<style lang="stylus" scoped>
.nav {
  padding: 5px 10px;
  background: #06a992;
  color: #fff;
}
.nav .nav-item {
  display: inline-block;
  margin-right: 10px;
  list-style: none;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
.demo1 .nav .nav-item.item-demo1 {
  opacity: 1;
}
</style>
