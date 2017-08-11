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
import TWEEN from 'tween.js';
interface TweenType {
  Tween( Object ): null,
  to( Object ): TweenType,
  easing( () => number ): TweenType,
  onUpdate( () => any ): TweenType,
  onComplete( () => any ): TweenType,
  start( ?number ): TweenType
}

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
    var vm = this;
    function animate () {
      if (TWEEN.update()) {
        requestAnimationFrame(animate);
      }
    }

    setTimeout( () => {
      let tween: TweenType = new TWEEN.Tween({ r: 0 })
        .to({r: 5}, 100)
        .easing(TWEEN.Easing.Quadratic.In)
        .onUpdate( function () {
          vm.circle_radius = this.r;
        })
        .start();

      animate();

      tween.onComplete( () => {
        tween = new TWEEN.Tween({ y: 0 })
          .to({y: 38}, 100)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate( function () {
            vm.line_height = this.y;
          })
          .start();

        tween.onComplete( () => {
          tween = new TWEEN.Tween({ x: 0 })
            .to({x: 115}, 400)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate( function () {
              vm.line_halfwidth = this.x;
            })
            .start();

          tween.onComplete( () => {
            tween = new TWEEN.Tween({ o: 0, y: 0 })
              .to( {o: 1, y: 1}, 300)
              .easing(TWEEN.Easing.Quadratic.In)
              .onUpdate( function () {
                vm.title1 = { opacity: this.o, transform: "scaleY(" + this.y + ")" };
              })
              .start();

            tween.onComplete( () => {
              setTimeout( () => {
                tween = new TWEEN.Tween({ o: 0, y: 0 })
                  .to( {o: 1, y: 1}, 250)
                  .easing(TWEEN.Easing.Quadratic.In)
                  .onUpdate( function () {
                    vm.title2 = { opacity: this.o, transform: "scaleY(" + this.y + ")" };
                  })
                  .start();
                tween.start();
                animate();
              }, 100 );
            });
          });
        });
      });
    }, 500 );
  }
};
</script>
