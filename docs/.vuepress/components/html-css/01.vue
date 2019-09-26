<template>
  <div class="demo-justify">
    <div class="text mb-10">文字两端对齐</div>

    <div class="element mb-10">
      <div class="bg">元素两端对齐</div>
      <div class="bg">元素两端对齐</div>
      <div class="bg">元素两端对齐</div>
    </div>

    <div class="grid mb-10">
      <div class="item bg">grid 布局</div>
      <div class="item bg">grid 布局</div>
      <div class="item bg">grid 布局</div>
    </div>

    <div class="float mb-10">
      <div class="left bg">float 布局</div>
      <div class="right bg">float 布局</div>
      <div class="middle bg">float 布局</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.demo-justify {
  width: 100%;

  .bg {
    background: #3eaf7c;
  }

  .mb-10 {
    margin-bottom: 10px;
  }

  // 文字两端对齐
  .text {
    width: 100%;
    text-align-last: justify;
  }

  // 元素两端对齐
  .element {
    display: flex;
    justify-content: space-between;
  }

  .grid {
    display: grid;
    grid-template-columns: 50px 1fr 50px 1fr 50px;
  }

  .item:nth-child(1) {
    grid-column-start: 1;
  }

  .item:nth-child(2) {
    grid-column-start: 3;
  }

  .item:nth-child(3) {
    grid-column-start: 5;
  }

  .float {
    overflow: hidden;

    & > .left {
      float: left;
      width: 30px; // 缺点： 需要定宽
    }

    & > .right {
      float: right;
      width: 30px;
    }

    & > .middle {
      overflow: hidden;
      margin: 0 auto;
      width: 30px;
    }
  }
}
</style>
