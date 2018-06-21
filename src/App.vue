<template>
  <div id="app">
    <nav-bar v-model=" show_titles "></nav-bar>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "./base.less";
</style>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/nav_bar.vue";

export default Vue.extend({
  components: {
    NavBar
  },

  data() {
    return { show_titles: true }; //localStorage.getItem("intro", "false");
  }
});
</script>
