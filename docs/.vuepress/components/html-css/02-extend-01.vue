<template>
  <div class="demo-bfc">
    <div class="aside"></div>
    <div class="main"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.demo-bfc {
  width: 600px;
  position: relative;
}

.aside {
  width: 100px;
  height: 150px;
  float: left;
  background: #f66;
}

.main {
  height: 500px;
  background: #fcc;
}
</style>
