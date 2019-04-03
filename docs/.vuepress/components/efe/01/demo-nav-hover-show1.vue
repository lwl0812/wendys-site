<template>
  <div class="demo2">
    <ul class="nav">
      <li class="nav-item item-home">首页</li>
      <li class="nav-item item-demo1">导航高亮</li>
      <li class="menu">
        <ul class="menu-ul">
          <li>导航高亮-下级1</li>
          <li>导航高亮-下级2</li>
        </ul>
      </li>
      <li class="nav-item item-demo2">导航悬浮显示下级</li>
      <li class="menu">
        <ul class="menu-ul">
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
.demo2 .nav .nav-item.item-demo2 {
  opacity: 1;
}

.nav-item:hover + .menu{
  display: list-item;
}

.menu {
  display: none;
  position: absolute;
  top: 44px;
  min-width: 100px;
  color: #000;
  border: 1px solid #000;
  box-shadow: 0 0 5px;
  &:before { // <-- 加一个伪元素，可以避免当下拉列表和导航菜单名称之间有空隙时，鼠标往下移到下拉列表的过程中，脱离导航菜单名称而隐藏下拉列表的情况
    content: "";
    position: absolute;
    left: 0;
    top: -20px;
    width: 100%;
    height: 20px;
  }
  &:hover {
    display: list-item;
  }
  .menu-ul {
    padding-right: 1.2em;
  }
}

ul, ul li {
  list-style: none;
}
</style>