<template>
  <div id="app">
    <nav-bar v-model=" show_titles "></nav-bar>

    <transition name="deblur">
      <div v-if=" !show_titles ">
        <router-view/>
      </div>
    </transition>
  </div>
</template>

<style lang="less">
@import "./base.less";

// TRANSITIONS
.deblur-enter-active {
  transition: 500ms filter ease-out 500ms, 500ms opacity ease-in 250ms;
}
.deblur-enter {
  filter: blur(5px);
  opacity: 0;
}
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
