<template>
  <transition v-on:enter="appear" v-on:leave="leave" appear>
    <div class="titles-wrapper" v-show=" show ">
      <div style="display: flex;width: 100vw;height: 100vh;">
       <div style="display: flex;margin: auto;">
          <svg width="16" :height="verticalLineHeight" xmlns="http://www.w3.org/2000/svg">
            <line x1="7.5" :y1="22*fullSizeHeaderScale" x2="7.5" :y2="10+line_height" :stroke-width="max(8*fullSizeHeaderScale,2)" stroke="rgba(275,255,255,.3)" />
            <circle cx="7.5" :cy="22*fullSizeHeaderScale" :r="max(circle_radius, 3)" fill="#b3b3b3" />
          </svg>
        </div>
      </div>

      <div class="titles">
        <svg :width="1505 * this.fullSizeHeaderScale" height="4" xmlns="http://www.w3.org/2000/svg" :style="{ position: 'absolute', top: 0, right: 0 }">
          <line :x1="0" y1="2" :x2="line_width" y2="2" :stroke-width="max(12*fullSizeHeaderScale,2)" stroke="#820a0a" />
        </svg>
        <object data="../images/titles.svg" type="image/svg+xml" :style="{ transform: 'scale(' + fullSizeHeaderScale + ')', position: 'absolute', right: 0 }"></object>
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

  // svg {
  //   left: ~"calc( 50vw - 150px )";
  //   bottom: 46vh;
  //   position: absolute;

  //   @media ( max-height: 500px ) {
  //     top: 75px;
  //   }
  // }

  .titles {
    top: 52.5vh;
    transform-origin: top right;
    right: 5vw;
    width: 100vw;
    position: absolute;

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
    'line_width' = 0;
    'title1' = { opacity: 0 as number, transform: "scaleY(0)" as string };
    'title2' = { opacity: 0 as number, transform: "scaleY(0)" as string };

    @Prop(Boolean)
    'show': boolean;

    appear( el: HTMLElement, done: ()=>void ) {
      tween ({
        from: { r: 0, y: 0 },
        to: { r: 15*this.fullSizeHeaderScale, y: window.innerHeight*0.1 },
        duration: 200,
        easing: { r: "easeInQuad", y: "easeOutQuad" },
        delay: 500,
        step: (state) => {
          this.circle_radius = state.r;
          this.line_height = state.y;
        }
      }).then ( () => {
        return tween ({
          from: { x: 0, o: 0, y: 0 },
          to: { x: 1505 * this.fullSizeHeaderScale, o: 1, y: 1 },
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
          from: { x: 1505 * this.fullSizeHeaderScale, o: 1, y: 1 },
          to: { x: 0, o: 0, y: 0 },
          duration: 200,
          easing: "easeInOutQuad",
          step: (state) => {
            this.line_width = state.x;
            this.title1 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
          }
        });
      }).then ( () => {
        return tween ({
          from: { r: 15*this.fullSizeHeaderScale, y: window.innerHeight*0.1 },
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
    get verticalLineHeight(): number {
      return window.innerHeight*0.05 + 15*this.fullSizeHeaderScale;
    }

    max(a,b): number {
      if ( a > b ) {
        return a;
      }
      else {
        return b;
      }
    }
  }
</script>
