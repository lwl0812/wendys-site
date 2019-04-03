<template>
  <div class="demo">
    <ul class="nav">
      <li class="nav-item item-home">
        <span>首页</span>
      </li>
      <li class="nav-item item-demo">
        <span>鼠标悬浮显示下级下拉菜单</span>
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
  name: 'demo-nav-hover-show2',
};
</script>

<style scoped lang="stylus">
.nav {
  padding: 5px 10px;
  background: #06a992;
  color: #fff;
}
.nav .nav-item {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  list-style: none;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    .menu-ul {
      display: block;
    }
  }
}
.demo .nav .nav-item.item-demo {
  opacity: 1;
}
.menu-ul {
  display: none;
  position: absolute;
  left: 0;
  top: 44px;
  min-width: 100px;
  padding-right: 1.2em;
  white-space: nowrap;
  border: 1px solid #000;
  box-shadow: 0 0 5px;
  color: #000;
  background-color: #fff;
  &:before { // <-- 加一个伪元素，可以避免当下拉列表和导航菜单名称之间有空隙时，鼠标往下移到下拉列表的过程中，脱离导航菜单名称而隐藏下拉列表的情况
    content: "";
    position: absolute;
    left: 0;
    top: -20px;
    width: 100%;
    height: 20px;
  }
}
ul, ul li {
  list-style: none;
}
</style>