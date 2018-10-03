<template>
  <div class="nav-links" v-if="$route.path !== '/'">
    <router-link to="/" class="home"><img src="@/assets/home.svg"/></router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/code-samples">Code Samples</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
  </div>
</template>

<style lang="less" scoped>
.nav-links {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: auto;

  @media (min-width: 760px) {
    width: calc(100vw - 400px);
  }

  a {
    margin: auto auto -3px;
    text-align: center;
    color: white;
    opacity: 0.5;
    font-size: 20px;

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
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class NavLinks extends Vue {}
</script>
