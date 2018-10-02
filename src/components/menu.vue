<template>
  <section class='menu-wrapper'>
    <MenuItem color="black" url="about" style="grid-row: 2">
      <template slot="header">About Me</template>
      <template slot="subheader">My work history, and my skills.</template>
    </MenuItem>
    <MenuItem color="green" url="code-samples" style="grid-row: 4">
      <template slot="header">Code Samples</template>
      <template slot="subheader">Small web apps, with code.</template>
    </MenuItem>
    <MenuItem color="blue" url="portfolio" style="grid-row: 6">
      <template slot="header">Portfolio</template>
      <template slot="subheader">In-depth looks at some of my past projects. <small>["In-depth" coming soon]</small></template>
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
