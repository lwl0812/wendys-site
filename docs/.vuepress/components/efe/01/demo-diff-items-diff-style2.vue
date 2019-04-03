<template>
  <div class="demo">
    <ul class="list clearfix">
      <li class="list-item">
        <i class="icon fab fa-facebook-f"></i>
      </li>
      <li class="list-item">
        <i class="icon far fa-envelope"></i>
      </li>
      <li class="list-item">
        <i class="icon fab fa-weixin"></i>
      </li>
      <li class="list-item">
        <i class="fab fa-qq"></i>
      </li>
      <li class="list-item">
        <i class="fab fa-weibo"></i>
      </li>
      <li class="list-item">
        <i class="fab fa-zhihu"></i>
      </li>
      <li class="list-item">
        <i class="fab fa-jsfiddle"></i>
      </li>
      <li class="list-item">Phone: 12345678</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'demo-diff-items-diff-style2',
  };
</script>

<style scoped lang="stylus">
  .demo {
    width: 100%;
    .list {
      background: #000;
      .list-item {
        display: inline-block;
        float: left;
        padding: 0 15px;
        color: #fff;
        &:last-child {
          border-left: 1px solid #fff;
        }
      }
    }
  }
</style>