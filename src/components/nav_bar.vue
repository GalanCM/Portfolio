<template>
  <div class="nav-wrapper" @click=" scrollComplete " :style=" show_titles ? 'cursor: pointer;' : 'height: ' + styles.navHeight + 'px;' ">
    <nav class="nav" ref="nav" 
      :style=" show_titles ? '' : 'transform: translateY(calc(-50vh + ' + styles.navHeight + 'px)); position: relative;' "
      :class=" { active: this.transitionsActive }">
        <img class="name" src="../assets/header.svg" ref="name" 
        :style=" show_titles ? '' : 'transform: scale(' + styles.logoScale + ')' "
        :class=" { active: this.transitionsActive }"
        @click="go_home"/>
    </nav>
    <transition name="intro" appear>
      <div class="line" ref="line" 
        :style=" show_titles ? '' : 'transform: translateY(calc(-50vh + ' + styles.navHeight + 'px)) scaleY(0.5); position: absolute;' "
        :class=" { active: this.transitionsActive }"></div>
    </transition>
    <transition name="intro" appear>
      <div class="bottom" ref="bottom" v-if="show_titles === true">
        <div class="titles" ref="titles">
          <div class="design">Stylish Websites & Apps</div>
          <div class="code">Smart Foundations</div>
        </div>
        <div class="chevron-wrapper" :style=" styles.hideChevron ? 'opacity: 0' : '' ">
          <div class="chevron">⌄</div>
          <div class="chevron">⌄</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.nav-wrapper {
  height: 200vh;
  width: 100%;

  .nav {
    position: fixed;
    width: 100%;
    height: 50vh;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #001f3d;
    z-index: 101;

    &.active {
      transition: 1000ms transform ease-in-out;
    }

    .name {
      position: relative;
      left: 0.5vw;
      top: 1.8vw;
      width: 90vw;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.6));
      margin-top: auto;
      transform-origin: 0 84%;
      cursor: pointer;

      &.active {
        transition: 1000ms transform ease-in-out;
      }
    }
  }
  .line {
    position: fixed;
    top: 50vh;
    width: 100%;
    height: 1.5vw;
    z-index: 100;
    transform-origin: top;
    background-color: #820a0a;
    box-shadow: 0px 0px 2px black;

    &.active {
      transition: 1000ms transform ease-in-out;
    }
  }

  .bottom {
    height: calc(50vh - 3.4vw);
    width: 100%;
    padding-top: calc(50vh + 3.4vw);
    min-height: 17vw;
    background-color: #000a14;
    display: flex;
    flex-direction: column;

    .titles {
      position: relative;
      top: 5px;
      font-size: 4.5vw;
      line-height: 1;
      right: 4%;
      margin-left: auto;
      font-family: Raleway, Helvetica, sans-serif;

      @media screen and (orientation: portrait) {
        font-size: 5.5vw;
      }

      .design {
        font-weight: 200;
        color: white;
      }
      .code {
        font-weight: 400;
        color: rgba(232, 232, 247, 0.8);
      }
    }
    .chevron-wrapper {
      margin-top: auto;
      margin-bottom: 10px;
      color: white;
      display: flex;
      font-size: 10vh;
      line-height: 0.7;
      transition: 100ms opacity ease-out;

      @media (orientation: portrait) {
        font-size: 10vw;
      }

      .chevron {
        margin: auto;
        transform: scaleX(1.5);
        animation: glow 2s ease-in-out infinite alternate;
      }
    }
  }

  // TRANSITIONS
  .intro-enter-active {
    &.line {
      transition: 500ms opacity ease-out, 500ms transform ease-in;
    }
    &.bottom {
      transition: 2500ms position 1000ms; // placeholder to insure transition runs

      .design {
        transition: 500ms clip-path linear 750ms;
        clip-path: polygon(0 0, 100% 0, 100% 110%, 0 110%);
      }
      .code {
        transition: 500ms clip-path linear 1800ms;
        clip-path: polygon(0 0, 100% 0, 100% 110%, 0 110%);
      }
      .chevron-wrapper {
        transition: 200ms opacity ease-out 2700ms;
      }
    }
  }
  .intro-enter {
    &.line {
      opacity: 0;
      transform: scaleX(0);
    }
    &.bottom {
      .design {
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
      }
      .code {
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
      }
      .chevron-wrapper {
        opacity: 0;
      }
    }
  }

  // KEYRAMES
  @keyframes glow {
    0% {
      filter: none;
    }
    100% {
      filter: drop-shadow(0px 0px 4px lightblue);
    }
  }
}
</style>


<script lang="ts">
import Vue from "vue";
import { setTimeout } from "timers";

export default Vue.extend({
  data() {
    return {
      transitionsActive: false,

      styles: {
        navHeight: 50,
        logoScale: 1,
        hideChevron: false
      }
    };
  },

  computed: {
    show_titles(): boolean {
      return this.value;
    }
  },

  props: ["value"],

  created() {
    if (this.show_titles) {
      this.transitionsActive = true;
    }
  },

  mounted() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);

    if (this.show_titles) {
      window.addEventListener("scroll", this.scrollHandler);
    }
  },

  methods: {
    scrollHandler(event) {
      if (
        (this.$refs.titles as Element).getBoundingClientRect().bottom <=
        (this.$refs.nav as Element).getBoundingClientRect().bottom
      ) {
        this.scrollComplete(null);
      }
    },

    resizeHandler() {
      const LOGO_WIDTH = window.innerWidth * 0.9;
      const LOGO_HEIGHT_RATIO = 0.127;

      let targetHeight = 50;
      let targetScale = targetHeight / (LOGO_WIDTH * LOGO_HEIGHT_RATIO);

      if (targetScale * LOGO_WIDTH > window.innerWidth * 0.85) {
        targetScale = (window.innerWidth * 0.85) / LOGO_WIDTH;
        targetHeight = window.innerWidth * 0.85 * LOGO_HEIGHT_RATIO;
      }

      this.styles.navHeight = targetHeight;
      this.styles.logoScale = targetScale;
    },

    scrollComplete(event) {
      this.styles.hideChevron = true;

      let speed = 1;
      let scroller = () => {
        window.scrollBy(0, speed);
        speed += 1;

        if (this.show_titles === false) {
          return;
        } else if (
          this.$refs.bottom !== undefined &&
          (this.$refs.bottom as Element).getBoundingClientRect().bottom <=
            (this.$refs.nav as Element).getBoundingClientRect().bottom
        ) {
          this.$emit("input", false);
          window.removeEventListener("scroll", this.scrollHandler);

          requestAnimationFrame(() => window.scrollTo(0, 0)); // scroll AFTER scroller() ticks
          setTimeout(() => (this.transitionsActive = false), 2500);
        } else {
          requestAnimationFrame(scroller);
        }
      };

      requestAnimationFrame(scroller);
    },

    go_home() {
      if (this.show_titles === false) {
        this.$router.push("/");
      }
    }
  }
});
</script>

