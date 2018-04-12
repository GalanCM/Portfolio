<template>
  <div>
    <div class="slide-cover"></div>
    <a class='header-link' :href=" !is_portrait ? '/miniblog' : null" @click="toggle_open">{{ !is_portrait ? "Code Sample" : "☰"}}</a>

    <transition name="slide" duration="5000ms">
      <div v-show="show_drawer" class="drawer">
        <a class="drawer-item"href="/miniblog">Code Sample</a>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
  .header-link {
    position: absolute;
    bottom: 0;
    right: 20px;
    line-height: 49px;
    padding: 0 15px 0 20px;
    font-weight: 200;
    font-size: 17px;
    letter-spacing: 4px;
    transition: background-color 0.4s ease-out;
    color: rgba(255, 255, 255, 0.7);
    font-family: Raleway, Helvetica, sans-serif;

    &:hover {
      background-color: rgba(100, 255, 255, 0.15);
      color: white;
    }

    @media (max-width: 1024px) and (orientation: portrait) {
      line-height: 100px;
      font-size: 60px;
      right: 0;
    }
  }

  .drawer {
    position: absolute;
    top: 100%;
    background-color: #001f3d;
    width: 100vw;
    z-index: -1;
    padding-top: 34px;
    transform: translateY(-20px);
  }

  .drawer-item {
    display: inline-block;
    width: ~"calc(100% - 30px)";
    text-align: right;
    font-family: Raleway, Helvetica, sans-serif;
    line-height: 80px;
    color: white;
  }

  .slide-cover {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #001f3d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    .drawer-item {
      transition: opacity 300ms ease-in 200ms;
    }
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateY(-100%);

    .drawer-item {
      opacity: 0;
    }
  }
</style>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";

  @Component({})
  export default class NavLinks extends Vue {
    is_portrait = this.get_mode();
    show_drawer = false;

    created(): void {
      window.addEventListener("resize", () => {
        this.is_portrait = this.get_mode();
      });
    }

    get_mode(): boolean {
      return window.matchMedia("(max-width: 1024px) and (orientation: portrait)")
        .matches;
    }

    toggle_open() {
      if (this.is_portrait) {
        this.show_drawer = !this.show_drawer;
      }
    }
  }
</script>
