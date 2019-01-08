<template>
  <section class="menu-wrapper">
    <MenuItem color="#000a14" url="about" style="grid-row: 2">
      <template slot="header">About Me</template>
      <template slot="subheader">Learn about my development philosophy and background.</template>
    </MenuItem>
    <MenuItem color="#009086" url="code-samples" style="grid-row: 4">
      <template slot="header">Code Samples</template>
      <template
        slot="subheader"
      >Get a feel for my skills via several small web apps, and their code.</template>
    </MenuItem>
    <MenuItem color="#004a8f" url="portfolio" style="grid-row: 6">
      <template slot="header">Portfolio</template>
      <template slot="subheader">Experience some of the professional products that I've launched.</template>
    </MenuItem>
  </section>
</template>

<style lang="less" scoped>
.menu-wrapper {
  display: grid;
  grid-template-rows: repeat(4, minmax(20px, 1fr) max-content);
  width: 100vw;
  min-height: calc(100vh - 50px);
  overflow-x: hidden;
}
</style>


<script lang="ts">
import Vue from "vue";
import MenuItem from "@/components/menu_item.vue";

export default Vue.extend({
  components: {
    MenuItem
  }
});
</script>
