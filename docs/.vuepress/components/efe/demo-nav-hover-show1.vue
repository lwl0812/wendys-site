<template>
  <div class="demo2">
    <ul class="nav">
      <li class="nav-item item-home">首页</li>
      <li class="nav-item item-demo1">导航高亮</li>
      <li class="menu">
        <ul>
          <li>导航高亮-下级1</li>
          <li>导航高亮-下级2</li>
        </ul>
      </li>
      <li class="nav-item item-demo2">导航悬浮显示下级</li>
      <li class="menu">
        <ul>
          <li>导航悬浮显示下级-下级1</li>
          <li>导航悬浮显示下级-下级2</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'demo-nav-hover-show1',
};
</script>

<style lang="stylus" scoped>
.nav {
  position: relative;
  padding: 5px 10px;
  background: #000;
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
.demo2 .nav .nav-item.item-demo2 {
  opacity: 1;
}

.nav-item:hover + .menu{
  display: list-item;
}
.menu {
  display: none;
  position: absolute;
  min-width: 100px;
  height: 2;
  color: #000;
  border: 1px solid #000;
  box-shadow: 0 0 5px;
  // left: 50%;
  // transform: translateX(-50%);
}
.menu:hover {
  display: list-item;
}

// .nav-item:hover ~ .menu {
//   display: block;
// }

</style>