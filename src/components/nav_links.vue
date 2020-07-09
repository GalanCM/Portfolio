<template>
  <transition name="fly" :duration="{enter: 1000}">
    <div class="nav-links" v-show="$route.path !== '/'">
      <router-link to="/about">About</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/code-samples">Sample Sites</router-link>
    </div>
  </transition>
</template>

<style lang="less" scoped>
@import "../base.less";

.nav-links {
  display: flex;
  position: relative;
  height: 50px;
  margin-top: auto;
  line-height: 50px;
  z-index: 1;
  .display-font-light();
  background: #001f3d;
  // border-bottom: 6px solid #820a0a;

  a {
    box-sizing: border-box;
    margin: 10px 1vw 0;
    padding: 1px 18px;
    transform: translateY(6px);
    text-align: center;
    color: #fffe;
    // font-size: 20px;
    font-size: calc(12px + 0.6vw);
    transition: 500ms transform cubic-bezier(0.61, 1, 0.88, 1);
    border-width: 0 4px;
    border-color: transparent;
    border-style: solid;

    &.router-link-active {
      transition: 500ms transform cubic-bezier(0.61, 1, 0.88, 1),
        300ms background-color cubic-bezier(0.45, 0, 0.55, 1) 0ms;
      background-color: #001f3d;
    }

    &:hover:not(.router-link-active) {
      background-color: #fff2;
      border-color: #001f3d;
    }

    &:first-child {
      margin-left: auto;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}

// TRANSITIONS
.fly-enter a {
  transform: translateX(100vw);
}
.fly-enter-active a {
  &:nth-child(1) {
    transition-delay: 150ms;
  }
  &:nth-child(2) {
    transition-delay: 300ms;
  }
  &:nth-child(3) {
    transition-delay: 450ms;
  }
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class NavLinks extends Vue {}
</script>
