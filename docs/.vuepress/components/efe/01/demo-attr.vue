<template>
  <p>
    Hello
    <span class="tip" data-title="Frontend Development">FED</span>
  </p>
</template>

<script>
  export default {
    name: 'demo-attr',
  };
</script>

<style scoped lang="stylus">
.tip {
  position: relative;
  &:hover:before {
    padding: 5px;
    content: attr(data-title);
    position: absolute;
    left: 50%;
    top: -230%;
    transform: translateX(-50%);
    white-space: nowrap;
    border-radius: 5px;
    background: #000;
    color: #fff;
  }
  &:hover:after {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: transparent;
    border-top-color: #000;
  }
}
</style>