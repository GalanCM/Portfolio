<template>
  <transition name="fly">
    <div class="nav-links" v-show="$route.path !== '/'">
      <router-link to="/" class="home">
        <img src="@/assets/home.svg" />
      </router-link>
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
  position: absolute;
  bottom: -3px;
  right: 0;
  margin-top: auto;
  .display-font-light();

  @media (min-width: 760px) {
    width: calc(100vw - 400px);
  }

  a {
    box-sizing: border-box;
    margin: auto auto -8px;
    padding: 6px 18px;
    text-align: center;
    color: #fffe;
    font-size: 20px;
    transition: 500ms transform cubic-bezier(0.61, 1, 0.88, 1);
    border-width: 0 4px;
    border-color: transparent;
    border-style: solid;

    &.router-link-active {
      transition: 500ms transform cubic-bezier(0.61, 1, 0.88, 1),
        200ms background-color ease-out 0ms;
      background-color: #001f3d;
    }

    &:hover:not(.router-link-active) {
      background-color: #fff2;
      border-color: #001f3d;
    }

    &.home {
      margin-right: 10px;

      @media (min-width: 760px) {
        visibility: collapse;
        margin: 0;
      }
    }
    &:not(.home) {
      @media (max-width: 759px) {
        visibility: collapse;
        margin: 0;
      }
    }

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
}

// TRANSITIONS
.fly-enter a {
  transform: translateX(100vw);
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class NavLinks extends Vue {}
</script>
