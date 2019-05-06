<template>
  <nav>
    <ul>
      <li v-for="nav_1 in navList" v-if="nav_1.text">
        <div class="nav-title">
          <a :href="nav_1.link" v-if="!(nav_1.items && nav_1.items.length)">{{ nav_1.text }}</a>
          <span v-else>{{ nav_1.text }}</span>
        </div>
        <ul v-if="nav_1.items && nav_1.items.length">
          <li v-for="nav_2 in nav_1.items" v-if="nav_2.text">
            <div class="nav-title">
              <a :href="nav_2.link" v-if="!(nav_2.items && nav_2.items.length)">{{ nav_2.text }}</a>
              <span v-else>{{ nav_2.text }}</span>
            </div>
            <ul v-if="nav_2.items && nav_2.items.length">
              <li v-for="nav_3 in nav_2.items" v-if="nav_3.text">
                <div class="nav-title">
                  <a :href="nav_3.link" v-if="!(nav_3.items && nav_3.items.length)">{{ nav_3.text }}</a>
                  <span v-else>{{ nav_3.text }}</span>
                </div>
                <ul v-if="nav_3.items && nav_3.items.length">
                  <li v-for="nav_4 in nav_3.items" v-if="nav_4.text">
                    <div class="nav-title">
                      <a :href="nav_4.link" v-if="!(nav_4.items && nav_4.items.length)">{{ nav_4.text }}</a>
                      <span v-else>{{ nav_4.text }}</span>
                    </div>
                    <ul v-if="nav_4.items && nav_4.items.length">
                      <li v-for="nav_5 in nav_4.items" v-if="nav_5.text">
                        <div class="nav-title">
                          <a :href="nav_5.link" v-if="!(nav_5.items && nav_5.items.length)">{{ nav_5.text }}</a>
                          <span v-else>{{ nav_5.text }}</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      activeIndex: '0',
      navList: [],
    };
  },
  created() {
    this.navList = this.$site.themeConfig._navigation;
    this.activeIndex = this.navList[0].text;
    console.log(this.navList)
  },
}
</script>

<style>

</style>

