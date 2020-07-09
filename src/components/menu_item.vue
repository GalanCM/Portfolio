<template>
  <router-link
    :to="url ? url : ''"
    class="menu-item portfolio"
    href="#"
    :style="{ '-webkit-tap-highlight-color': color+66}"
  >
    <div class="content-wrapper">
      <div class="title">
        <slot name="header"></slot>
      </div>
      <div class="tagline">
        <slot name="subheader"></slot>
      </div>
    </div>
    <transition name="go-fade">
      <div class="go" v-show="$route.path === '/'">
        <span>Go&nbsp;</span>
        <img src="@/assets/arrow-left.svg" />
      </div>
    </transition>
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
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(200px, 3fr) minmax(85px, 1fr);
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
    padding: 0 10px 0 0;
  }

  .title {
    .nav-title();
    color: #004e9b;
  }

  .tagline {
    .nav-tagline();
  }

  .go {
    font-size: 35px;
    font-weight: 700;
    margin: auto 0;
    line-height: 0;
    white-space: nowrap;
    color: #004e9b;

    @media (max-width: 1023px) {
      margin: auto 0 auto auto;

      span {
        visibility: hidden;
      }
    }
    img {
      vertical-align: -1px;
      opacity: 0.8;
    }
  }

  .color-bar {
    position: absolute;
    top: 0;
    right: 0;
    width: 300vw;
    height: 100%;
    transform: translateX(calc(300vw - 25px));
    opacity: 1;

    &.active {
      transition: 400ms transform ease-in-out, 400ms opacity ease-in;
      transform: translateX(0) scaleY(0.7);
      opacity: 0.7;
    }
  }
}

// TRANSITIONS
.go-fade-enter-active {
  transition: 200ms opacity ease-in 200ms;
}
.go-fade-enter {
  opacity: 0;
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
