<template>
  <transition v-on:enter="appear" v-on:leave="leave" appear>
    <div class="wrapper" v-show=" show ">
      <svg width="250px" height="60" viewbox="0,0,250,60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="10" :r="circle_radius" fill="#868d95" />
        <line x1="125" y1="10" x2="125" :y2="10+line_height" stroke-width="2" stroke="#868d95" />
        <line :x1="10+(115-line_halfwidth)" y1="50" :x2="125+line_halfwidth" y2="50" stroke-width="3" stroke="white" />
      </svg>

      <div class="titles">
        <h2 :style="title1">Full-stack Web Developer</h2>
        <h3 :style="title2">UX Specialist</h3>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
  .wrapper {
    position: absolute;
    user-select: none;
    cursor: default;

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
    left: ~"calc( 50vw - 125px )";
    top: ~"calc( 50vh + 35px)";

    @media ( max-height: 500px ) {
      top: 75px;
    }
  }

  .titles {
    left: ~"calc( 50vw - 230px )";
    top: ~"calc( 50vh + 80px )";
    width: 460px;
    text-align: center;
    transform: scaleX(1.2);

    h2, h3 {
      transform-origin: top center;
    }

    @media ( max-height: 500px ) {
      top: 120px;
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
    'line_halfwidth' = 0;
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
          from: { x: 0, o: 0, y: 0 },
          to: { x: 115, o: 1, y: 1 },
          duration: 400,
          easing: "easeInOutQuad",
          step: (state) => {
            this.line_halfwidth = state.x;
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
          from: { x: 115, o: 1, y: 1 },
          to: { x: 0, o: 0, y: 0 },
          duration: 200,
          easing: "easeInOutQuad",
          step: (state) => {
            this.line_halfwidth = state.x;
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
  }
</script>
