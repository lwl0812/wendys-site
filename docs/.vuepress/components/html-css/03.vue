<template>
  <div class="demo-currentcolor">
    <p>鼠标 hover 观察效果</p>
    <div>
      <a href="javascript:void(0)" class="link"
        >返回 <i class="el-icon-back icon"></i>（background-color 没有使用 currentColor）</a
      >
    </div>
    <div>
      <a href="javascript:void(0)" class="link"
        >返回 <i class="el-icon-back icon1"></i>（background-color 使用 currentColor）</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.demo-currentcolor {
  .link {
    color: #000;

    &:hover {
      color: #03A9F4;
    }
  }

  .icon {
    background-color: #000;
  }

  .icon1 {
    background-color: currentColor;
  }
}
</style>
