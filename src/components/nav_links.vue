<template>
  <transition name="fade">
    <div class="nav-links" v-show="$route.path !== '/'">
      <router-link to="/" class="home">
        <img src="@/assets/home.svg">
      </router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/code-samples">Samples</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
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
    margin: auto auto -3px;
    text-align: center;
    color: white;
    opacity: 0.5;
    font-size: 20px;
    transition: 350ms opacity ease-in;

    &:hover {
      opacity: 0.8;
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
  }
}

// TRANSITIONS
.fade-enter a {
  opacity: 0;
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class NavLinks extends Vue {}
</script>
