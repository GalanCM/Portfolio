<template>
  <router-link
    :to="url ? url : ''"
    class="menu-item portfolio"
    href="#"
    :style="{ '-webkit-tap-highlight-color': color+66, '--border-color': color+'aa'}"
  >
    <div class="content-wrapper">
      <div class="title">
        <slot name="header"></slot>
      </div>
      <div class="tagline">
        <slot name="subheader"></slot>
      </div>
    </div>
    <div
      class="color-bar"
      :style="{ 'background-color': color }"
      :class="matchesRoute ? 'active' : ''"
    ></div>
  </router-link>
</template>

<style lang="less">
@import "../base.less";

.menu-item {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 30px 50px;
  color: black;
  background-color: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 0.07) 15vw
  );
  border-top: 1px solid var(--border-color);

  &:nth-child(1) {
    margin-left: 5vw;
  }
  &:nth-child(2) {
    margin-left: 20vw;
  }
  &:nth-child(3) {
    margin-left: 12vw;
  }

  .content-wrapper {
    margin: auto 0;
    padding: 0 10px 0 0;
  }

  .title {
    .nav-title();
    color: lighten(#d2cec2, 10%);
    text-shadow: 1px 1px 2px black;
  }

  .tagline {
    .nav-tagline();
    margin: 0;
    font-size: 17px;
    font-weight: 200;
    line-height: 1;
    color: lighten(#23adf0, 25%);
    text-shadow: 1px 1px 2px black;
  }

  .color-bar {
    position: absolute;
    top: 0;
    right: 0;
    width: 300vw;
    height: 100%;
    transform: translateX(calc(300vw - 5px));
    opacity: 1;

    &.active {
      transition: 400ms transform ease-in-out, 400ms opacity ease-in;
      transform: translateX(0) scaleY(0.7);
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
