<template>
  <div id="app">
    <nav-bar v-model=" show_titles "></nav-bar>

    <transition name="deblur">
      <div v-show=" !show_titles ">
        <Menu></Menu>
        <transition name="page">
          <router-view class="router-wrapper" />
        </transition>
      </div>
    </transition>
  </div>
</template>

<style lang="less">
@import "~normalize.css/normalize.css";
@import "./base.less";

#app {
  overflow-x: hidden;
}

.router-wrapper {
  overflow-x: hidden;
}

// TRANSITIONS
#app {
  width: 100%;
}
.deblur-enter-active {
  transition: 500ms filter ease-out 500ms, 500ms opacity ease-in 250ms;
}
.deblur-enter {
  filter: blur(5px);
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: 400ms transform ease-out 100ms;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/nav_bar.vue";
import Menu from "@/components/menu.vue";
import MetaData from "@/metadata.ts";

export default Vue.extend({
  metaInfo: {
    title: "Galan Montgomery | Home",
    meta: MetaData,
  },
  components: {
    NavBar,
    Menu,
  },

  data() {
    return { show_titles: true };
  },

  created() {
    if (
      sessionStorage.getItem("show_titles") === "false" ||
      location.pathname !== "/"
    ) {
      this.show_titles = false;
    } else {
      document.body.style.overflowY = "hidden";
    }
  },

  watch: {
    show_titles(value) {
      if (this.$route.path === "/") {
        sessionStorage.setItem("show_titles", value.toString());
      }

      if (value === true) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    },
  },
});
</script>
