<template>
  <transition v-on:enter="appear" v-on:leave="leave" appear>
    <div class="titles-wrapper" v-show=" show ">
      <!-- <svg width="790px" height="60" viewbox="0,0,780,60" xmlns="http://www.w3.org/2000/svg">
        <line x1="125" y1="10" x2="125" :y2="10+line_height" stroke-width="3" stroke="rgba(255,255,255,.3)" />
        <circle cx="125" cy="10" :r="circle_radius" fill="#b3b3b3" />
        <line :x1="60" y1="50" :x2="line_width" y2="50" stroke-width="4" stroke="#820a0a" />
      </svg> -->

      <div class="titles">
        <object data="../images/titles.svg" type="image/svg+xml" :style="{ transform: 'scale(' + fullSizeHeaderScale + ')' }"></object>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
  .titles-wrapper {
    user-select: none;
    cursor: default;
    width: 100vw;

    svg, .titles {
      margin: 0;
      position: absolute;
    }
  }

  h2 {
    font-size: 2em;
    margin: 20px 0 5px;

    @media ( max-device-width: 1024px ){
      font-size: 1em;
    }
  }
  h3 {
    color: #868d95;
    font-size: 2em;
    margin: 0;

    @media ( max-device-width: 1024px ){
      font-size: 1em;
    }
  }

  svg {
    left: ~"calc( 50vw - 150px )";
    bottom: 46vh;

    @media ( max-height: 500px ) {
      top: 75px;
    }
  }

  .titles {
    top: 52vh;
    transform-origin: top right;
    right: 5vw;
    width: 1600px;

    object {
      transform-origin: top right;
    }
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { tween } from 'shifty';

  @Component
  export default class Titles extends Vue {
    'circle_radius' = 0;
    'line_height' = 0;
    'line_width' = 60;
    'title1' = { opacity: 0 as number, transform: "scaleY(0)" as string };
    'title2' = { opacity: 0 as number, transform: "scaleY(0)" as string };

    @Prop(Boolean)
    'show': boolean;

    appear( el: HTMLElement, done: ()=>void ) {
      tween ({
        from: { r: 0, y: 0 },
        to: { r: 5, y: 38 },
        duration: 200,
        easing: { r: "easeInQuad", y: "easeOutQuad" },
        delay: 500,
        step: (state) => {
          this.circle_radius = state.r;
          this.line_height = state.y;
        }
      }).then ( () => {
        return tween ({
          from: { x: 60, o: 0, y: 0 },
          to: { x: 1625 * this.fullSizeHeaderScale, o: 1, y: 1 },
          duration: 400,
          easing: "easeInOutQuad",
          step: (state) => {
            this.line_width = state.x;
            this.title1 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
          }
        });
      }).then ( () => {
        return tween ({
          from: { o: 0, y: 0 },
          to: {o: 1, y: 1},
          duration: 250,
          delay: 300,
          easing: "easeInQuad",
          step: (state) => {
            this.title2 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
          }
        });
      }).then ( () => {
        done();
      });
    }

    leave( el: HTMLElement, done: ()=>void ) {
      tween ({
        from: { o: 1, y: 1 },
        to: { o: 0, y: 0 },
        duration: 250,
        easing: "easeInQuad",
        step: (state) => {
          this.title2 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
        }
      }).then ( () => {
        return tween ({
          from: { x: 1625 * this.fullSizeHeaderScale, o: 1, y: 1 },
          to: { x: 60, o: 0, y: 0 },
          duration: 200,
          easing: "easeInOutQuad",
          step: (state) => {
            this.line_width = state.x;
            this.title1 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
          }
        });
      }).then ( () => {
        return tween ({
          from: { r: 5, y: 38 },
          to: { r: 0, y: 0 },
          duration: 100,
          easing: { r: "easeInQuad", y: "easeOutQuad" },
          step: (state) => {
            this.circle_radius = state.r;
            this.line_height = state.y;
          }
        });
      }).then ( () => {
        done();
      });
    }

    get fullSizeHeaderScale() : number {
      return (window.innerWidth+100) * 0.5 / 1575;
    }
  }
</script>
