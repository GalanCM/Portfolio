<template>
  <div>
    <nav>
    </nav>
    <div class="intro">
      <div class="top" ref="top">
        <img class="name" src="../assets/header.svg" ref="name" />
      </div>
      <div class="line" ref="line"></div>
      <div class="bottom" ref="bottom" v-if="hide_titles === false">
        <div class="titles">
          <div class="web">Web UX Engineer</div>
          <div class="and">&</div>
          <div class="game">Game Developer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.intro {
  height: 200vh;
  width: 100vw;

  .top {
    position: fixed;
    width: 100vw;
    height: 50vh;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #001f3d;
    z-index: 101;
    transition: 1000ms transform ease-in-out;

    .name {
      position: relative;
      left: 0.5vw;
      top: 1.8vw;
      width: 90vw;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.6));
      margin-top: auto;
      transform-origin: 0 88%;
      transition: 1000ms transform ease-in-out;
    }
  }
  .line {
    position: fixed;
    top: 50vh;
    width: 100vw;
    height: 4vh;
    background-color: #820a0a;
    z-index: 100;
    transform-origin: top;
    transition: 1000ms transform ease-in-out;
  }

  .bottom {
    height: 50vh;
    padding-top: calc(50vh + 1.4vw);
    min-height: fit-content;
    padding-bottom: 55px;
    background-color: #000a14;

    .titles {
      position: relative;
      top: 5px;
      font-size: calc(50vw / 9);
      line-height: 1;
      right: 2%;
      font-family: Raleway, Helvetica, sans-serif;
      float: right;

      .web {
        font-weight: 200;
        color: white;
      }
      .game {
        font-weight: 400;
        color: rgba(232, 232, 247, 0.8);
      }
      .and {
        position: absolute;
        transform: translateX(calc(-100% - 10px));
        font-weight: 200;
        color: rgba(225, 225, 255, 0.3);
      }
    }
  }
}
</style>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      show_intro: true,
      hide_titles: false
    };
  },

  mounted() {
    if (this.show_intro) {
      window.addEventListener("scroll", this.scrollHandler);
    }
  },

  methods: {
    scrollHandler(event) {
      if (
        (this.$refs.bottom as Element).getBoundingClientRect().bottom <
        (this.$refs.top as Element).getBoundingClientRect().bottom
      ) {
        this.hide_titles = true;
        window.removeEventListener("scroll", this.scrollHandler);

        (this.$refs.top as HTMLElement).style.transform =
          "translateY( calc(-50vh + 50px) )";
        (this.$refs.line as HTMLElement).style.transform =
          "translateY( calc(-50vh + 50px) ) scaleY(0.5)";
        (this.$refs.name as HTMLElement).style.transform =
          "scale(" +
          50 / (this.$refs.name as Element).getBoundingClientRect().height +
          ")";
      }
    }
  }
});
</script>

