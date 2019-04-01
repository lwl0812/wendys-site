<template>
  <div class="demo">
    <div class="col col1">
      <p class="title">苹果</p>
      <p class="des">
        苹果，是水果中的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果富含矿物质和维生素，是人们经常食用的水果之一。
      </p>
    </div>
    <div class="col col2">
      <p class="title">香蕉</p>
      <p class="des">
        香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实，热带地区广泛种植。香蕉味香、富含营养，植株为大型草本，从根状茎发出，由叶鞘下部形成高3～6公尺(10～20尺)的假杆；叶长圆形至椭圆形，有的长达3～3.5公尺(10～11.5尺)，宽65公分(26寸)，10～20枚簇生茎顶。
      </p>
    </div>
    <div class="col col3">
      <p class="title">水蜜桃</p>
      <p class="des">
        水蜜桃（学名：Prunus persica 、meltingfleshed peach）：蔷薇科、桃属植物。南方品种群中肉质柔软多汁呈软溶质的一类品种。果实顶部平圆，熟后易剥皮，多粘核。 [1]
      </p>
    </div>
    <div class="col col4">
      <p class="title">菠萝</p>
      <p class="des">
        菠萝（学名：Ananas comosus），是热带水果之一。福建和台湾地区称之为旺梨或者旺来（ông-lâi），新马一带称为黄梨，大陆及香港称作菠萝。有70多个品种，岭南四大名果之一。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'demo-cols-same-height1',
  };
</script>

<style scoped lang="stylus">
.demo {
  overflow: hidden;
}
.col {
  float: left;
  width: 20%;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom 2000px; // <-- 设置 padding-bottom
  margin-bottom: -2000px; // <-- 设置 margin-bottom
  margin-right: 10px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>