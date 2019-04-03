<template>
  <div class="radio-checkbox">
    <label class="control-label">
      <input type="radio" value="value1" name="radio">
      radio1: <span class="radio"></span>
    </label>
    <label class="control-label">
      <input type="radio" value="value2" name="radio">
      radio2: <span class="radio"></span>
    </label>

    <label class="control-label">
      <input type="checkbox" value="value1">
      checkbox <span class="checkbox"></span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'demo-radio-checkbox',
  };
</script>

<style scoped lang="stylus">
  input[type=checkbox],
  input[type=radio] {
    display: none;
  }
  .control-label {
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
  }
  .radio {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: 1px solid #3eaf7c;
    border-radius 50%;
  }
  input[type=radio]:checked + .radio {
    box-shadow: 0 0 3px #3eaf7c;
    &:after {
      content: '';
      width: 50%;
      height: 50%;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      background: #3eaf7c;
      border-radius 50%;
    }
  }
  .checkbox {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: 1px solid #3eaf7c;
  }
  input[type=checkbox]:checked + .checkbox {
    box-shadow: 0 0 3px #3eaf7c;
    &:after {
      content: '✓';
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: #3eaf7c;
    }
  }
</style>