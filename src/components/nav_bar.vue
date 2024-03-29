<template>
  <div
    class="nav-wrapper"
    @click="scrollComplete"
    :style="
      show_titles ? 'cursor: pointer;' : 'height: ' + styles.navHeight + 'px;'
    "
  >
    <header
      class="nav"
      ref="nav"
      :style="
        show_titles
          ? ''
          : 'transform: translateY(calc(-50vh + ' +
            styles.navHeight +
            'px)); position: absolute;'
      "
      :class="{ active: this.transitionsActive }"
    >
      <img
        class="name"
        src="../assets/header.svg"
        ref="name"
        :style="
          show_titles
            ? ''
            : `transform: scale(${styles.logoScale}) translateY(${
                styles.navHeight > 50
                  ? -styles.navHeight / styles.logoScale / 2
                  : 0
              }px)`
        "
        :class="{ active: this.transitionsActive }"
        @click="go_home"
      />
      <NavLinks
        v-if="!show_titles"
        :style="{
          marginLeft: `calc(-1 * 90vw * ${styles.logoScale} + 6% * ${styles.logoScale} )`,
        }"
      />
    </header>

    <transition name="intro" :appear="show_titles">
      <div
        class="line"
        ref="line"
        :style="
          show_titles
            ? ''
            : 'transform: translateY(calc(-50vh + ' +
              styles.navHeight +
              'px)) scaleY(0.5); position: absolute;'
        "
        :class="{ active: this.transitionsActive }"
      ></div>
    </transition>
    <transition name="intro" appear>
      <div class="bottom" ref="bottom" v-if="show_titles === true">
        <div class="titles" ref="titles">
          <div class="design">Stylish Websites & Apps</div>
          <div class="code">Smart Foundations</div>
        </div>
        <div
          class="chevron-wrapper"
          :style="styles.hideChevron ? 'opacity: 0' : ''"
        >
          <div class="chevron">⌄</div>
          <div class="chevron">⌄</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import "../base.less";

.nav-wrapper {
  height: 200vh;
  width: 100%;

  .nav {
    display: flex;
    position: fixed;
    width: 100%;
    height: 50vh;
    min-height: fit-content;
    background-color: #001f3d;
    z-index: 101;
    -webkit-tap-highlight-color: transparent;

    &.active {
      transition: 1000ms transform ease-in-out;
    }

    .name {
      position: relative;
      margin-top: auto;
      left: 0.5vw;
      top: 1.8vw;
      z-index: 2;
      width: 90vw;
      height: calc(90vw * 0.12698);
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.6));
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
    height: 12px;
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
      font-family: @display-font;

      @media screen and (orientation: portrait) {
        font-size: 5.5vw;
      }

      .design {
        font-weight: 200;
        color: rgba(232, 232, 247, 1);
      }
      .code {
        font-weight: 300;
        color: rgba(232, 232, 247, 0.85);
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
import NavLinks from "@/components/nav_links.vue";

export default Vue.extend({
  components: {
    NavLinks,
  },

  data() {
    return {
      transitionsActive: false,

      styles: {
        navHeight: 50,
        logoScale: 1,
        hideChevron: false,
      },
    };
  },

  computed: {
    show_titles(): boolean {
      return this.value;
    },
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
      document.body.addEventListener("scroll", this.scrollHandler);
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
      const WINDOW_WIDTH =
        document.querySelector("html")?.clientWidth ?? window.innerWidth;
      const LOGO_WIDTH = WINDOW_WIDTH * 0.9;
      const LOGO_HEIGHT_RATIO = 0.127;

      let targetHeight = 50;
      let targetScale = targetHeight / (LOGO_WIDTH * LOGO_HEIGHT_RATIO);

      if (targetScale * LOGO_WIDTH > WINDOW_WIDTH * 0.85) {
        targetScale = (WINDOW_WIDTH * 0.85) / LOGO_WIDTH;
        targetHeight = WINDOW_WIDTH * 0.85 * LOGO_HEIGHT_RATIO;
      }
      if (WINDOW_WIDTH < 860) {
        targetHeight *= 2;
      }

      this.styles.navHeight = targetHeight;
      this.styles.logoScale = targetScale;
    },

    scrollComplete(event) {
      this.styles.hideChevron = true;
      let speed = 1;
      let scroller = () => {
        document.body.scrollBy(0, speed);
        speed += 1;

        if (this.show_titles === false) {
          return;
        } else if (
          this.$refs.bottom !== undefined &&
          (this.$refs.bottom as Element).getBoundingClientRect().bottom <=
            (this.$refs.nav as Element).getBoundingClientRect().bottom
        ) {
          this.$emit("input", false);
          document.body.removeEventListener("scroll", this.scrollHandler);

          requestAnimationFrame(() => document.body.scrollTo(0, 0)); // scroll AFTER scroller() ticks
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
    },
  },
});
</script>
