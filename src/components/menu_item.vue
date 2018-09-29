<template>
  <router-link :to="url ? url : ''" class="menu-item portfolio" href="#">
    <div class="content-wrapper">
      <h1><slot name="header"></slot></h1>
      <h2><slot name="subheader"></slot></h2>
    </div>
    <div class="color-bar" :style="{ 'background-color': color }" :class="matchesRoute ? 'active' : ''"></div>
  </router-link>
</template>

<style lang="less">
.menu-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(200px, 3fr) 1fr;
  position: relative;
  margin: 0;
  padding: 30px 50px;
  color: black;
  background-color: rgb(250, 250, 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) inset;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);

  .content-wrapper {
    grid-column: 2;
  }

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 28px;
    color: #004e9b;
  }

  h2 {
    font-size: 20px;
    color: rgb(80, 80, 60);
  }

  .color-bar {
    position: absolute;
    top: 0;
    right: 0;
    width: 500vw;
    height: 100%;
    transition: 700ms transform ease-in-out, 700ms opacity ease-in;
    transform: translateX(calc(500vw - 25px));
    opacity: 1;

    &.active {
      transform: translateX(0) scaleY(0.8);
      opacity: 0.7;
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MenuItem extends Vue {
  @Prop(String)
  url!: String;

  @Prop(String)
  color!: String;

  get matchesRoute() {
    return this.$route.name === this.url;
  }
}
</script>
