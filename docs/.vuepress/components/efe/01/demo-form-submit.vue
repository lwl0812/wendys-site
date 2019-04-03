<template>
  <form action="/search">
    <input type="search" name="keyword">
    <input type="number" name="price">
  </form>
</template>

<script>
  export default {
    name: 'demo-form-submit',
  };
</script>

<style scoped></style>