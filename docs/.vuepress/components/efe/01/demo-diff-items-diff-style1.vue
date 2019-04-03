<template>
  <div class="demo">
    <ul class="list clearfix">
      <li class="list-item">一行 1 个</li>
    </ul>
    <ul class="list clearfix">
      <li class="list-item">一行 2 个</li>
      <li class="list-item">一行 2 个</li>
    </ul>
    <ul class="list clearfix">
      <li class="list-item">一行 3 个</li>
      <li class="list-item">一行 3 个</li>
      <li class="list-item">一行 3 个</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'demo-diff-items-diff-style1',
  };
</script>

<style scoped lang="stylus">
.demo {
  width: 100%;
  .list {
    .list-item {
      display: inline-block;
      float: left;
      text-align: center;
      border: 1px solid #000;
      box-sizing: border-box; // <-- 设置 box-sizing

      background-color: #4abf8a;

      &:nth-child(2) {
        background-color: #3a8ee6;
      }

      &:nth-child(3) {
        background-color: yellow;
      }

      width: 100%; // <-- 一行显示一个时，使用该样式

      &:first-child:nth-last-child(2),
      &:first-child:nth-last-child(2) ~ .list-item { // <-- 一行显示两个时，使用该样式，&:first-child:nth-last-child(2) 指向第一个元素
        width: 50%;
      }

      &:first-child:nth-last-child(3),
      &:first-child:nth-last-child(3) ~ .list-item { // <-- 一行显示两个时，使用该样式，&:first-child:nth-last-child(2) 指向第一个元素
        width: 33.3%;
      }
    }
  }
}
</style>