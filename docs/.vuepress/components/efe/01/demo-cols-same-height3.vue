<template>
  <div class="demo">
    <div class="col col1">
      <p class="title">苹果</p>
      <p class="des">
        苹果，是水果中的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。
      </p>
    </div>
    <div class="col col2">
      <p class="title">香蕉</p>
      <p class="des">
        香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实，热带地区广泛种植。
      </p>
    </div>
    <!--加了个 tr 实现一行两列布局-->
    <span class="tr"></span>
    <div class="col col3">
      <p class="title">水蜜桃</p>
      <p class="des">
        水蜜桃（学名：Prunus persica 、meltingfleshed peach）：蔷薇科、桃属植物。南方品种群中肉质柔软多汁呈软溶质的一类品种。果实顶部平圆，熟后易剥皮，多粘核。
      </p>
    </div>
    <div class="col col4">
      <p class="title">菠萝</p>
      <p class="des">
        菠萝（学名：Ananas comosus），是热带水果之一。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo-cols-same-height3',
  };
</script>

<style scoped lang="stylus">
  .demo
    display table
    border-spacing 20px // <-- 设置间隔
    word-break break-all
  .col
    display table-cell
    width 1000px // <-- 设置很大的宽度，table 自动平分宽度
    padding: 10px
    border 1px solid #000
    border-radius 5px
  .tr
    display none
  @media (max-width: 500px)
    .demo
      display block // <-- 可以覆盖原来的样式，实现响应式布局
    .col
      display block // <-- 可以覆盖原来的样式，实现响应式布局
      width: 100%
  @media (max-width: 1024px) and (min-width: 501px)
    .tr
      display table-row // <-- 实现一行两列布局
</style>