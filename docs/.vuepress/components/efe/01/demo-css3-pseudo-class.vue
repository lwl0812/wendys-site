<template>
  <form class="form">
    <p>利用 :focus 伪类实现 focus 时，放大镜颜色加深。</p>
    <div class="form-group">
      <label for="search" class="form-label"></label>
      <div class="form-control">
        <input class="form-control-input" id="search" type="text">
        <i class="icon-search fas fa-search"></i>
      </div>
    </div>
    <p>利用 :invalid 伪类进行校验。</p>
    <div class="form-group">
      <label for="email" class="form-label"></label>
      <div class="form-control">
        <input class="form-control-input" id="email" type="email">
        <span class="btn">Next</span>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'demo-css3-pseudo-class',
  };
</script>

<style scoped lang="stylus">
.form-control {
  position: relative;
}

.form-control-input {
  padding: 0 32px;
  &:focus + .icon-search { // <-- :focus 伪类
    color: #3eaf7c;
  }
  &:invalid + .btn { // <-- :invalid 伪类
    opacity: .5;
    cursor: default;
  }
}

.icon-search {
  position: absolute;
  left: 10px;
  top: 14px;
  color: #ddd;
}

.btn {
  height: 40px;
  line-height: 1.5;
  padding: 5px 10px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(100%);
  border: 1px solid #3eaf7c;
  border-radius: 3px;
  background: #3eaf7c;
  color: #fff;
  cursor: pointer;
}
</style>