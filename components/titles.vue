<template>
  <div class="wrapper">
    <svg width="250px" height="60" viewbox="0,0,250,60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="125" cy="10" :r="circle_radius" fill="#818190" />
      <line x1="125" y1="10" x2="125" :y2="10+line_height" stroke-width="2" stroke="#818190" />
      <line :x1="10+(115-line_halfwidth)" y1="50" :x2="125+line_halfwidth" y2="50" stroke-width="3" stroke="white" />
    </svg>
    <div class="titles">
      <h2 :style="title1">Full-stack Web Developer</h2>
      <h3 :style="title2">UX Specialist</h3>
    </div>
  </div>
</template>

<style lang="less">


  .wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto auto;

    svg, .titles {
      margin: 0 auto;
      position: absolute;
    }
  }

  h2 {
    font-size: 27px;
    margin: 20px 0 5px
  }
  h3 {
    color: #818190;
    font-size: 27px;
    margin: 0;
  }

  svg {
    left: ~"calc( 50vw - 125px )";
    top: ~"calc( 50vh + 35px)";
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
  }
</style>

<script>
import { tween } from 'shifty';

export default {
  name: 'titles',

  data() {
    return {
      circle_radius: 0,
      line_height: 0,
      line_halfwidth: 0,
      title1: { opacity: 0, transform: "scaleY(0)" },
      title2: { opacity: 0, transform: "scaleY(0)" }
    };
  },

  created() {
    tween ({
      from: { r: 0 },
      to: { r: 5 },
      duration: 100,
      easing: "easeInQuad",
      delay: 500,
      step: (state) => {
        this.circle_radius = state.r;
      }
    }).then ( () => {
      return tween ({
        from: { y: 0 },
        to: { y: 38 },
        duration: 100,
        easing: "easeOutQuad",
        step: (state) => {
          this.line_height = state.y;
        }
      });
    }).then ( () => {
      return tween ({
        from: { x: 0 },
        to: {x: 115},
        duration: 400,
        easing: "easeInOutQuad",
        step: (state) => {
          this.line_halfwidth = state.x;
        }
      });
    }).then ( () => {
      return tween ({
        from: { o: 0, y: 0 },
        to: {o: 1, y: 1},
        duration: 300,
        easing: "easeInQuad",
        step: (state) => {
          this.title1 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
        }
      });
    }).then ( () => {
      return tween ({
        from: { o: 0, y: 0 },
        to: {o: 1, y: 1},
        duration: 250,
        delay: 100,
        easing: "easeInQuad",
        step: (state) => {
          this.title2 = { opacity: state.o, transform: "scaleY(" + state.y + ")" };
        }
      });
    });
  }
};
</script>
