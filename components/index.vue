<template>
  <header>
    <h1 class="name">GalanMontgomery</h1>
    <div class="titles">
      <svg width="250px" height="60" viewBox="0,0,250,60" xmlns="http://www.w3.org/2000/svg">
        <circle v-if="show_titles" cx="125" cy="10" :r="circle_radius" fill="rgba(140,140,175,1.0)" />
        <line x1="125" y1="10" x2="125" :y2="10+line_height" stroke-width="2" stroke="rgba(140,140,175,1.0)" />
        <line :x1="10+(115-line_halfwidth)" y1="50" :x2="125+line_halfwidth" y2="50" stroke-width="3" stroke="white" />
      </svg>
      <div id="titles">
        <h2 :style="title1">Full-stack Web Developer</h2>
        <h3 :style="title2">UX Specialist</h3>
      </div>
    </div>
  </header>
</template>

<style scope="local" lang="less">
  header {
    background-color: rgb(12, 27, 42);
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
  
  h1,h2,h3 {
    font-family: Ubuntu, sans-serif;
  }
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 27px;
    margin: 20px 0 5px
  }
  h3 {
    font-size: 22px;
    margin: 0;
  }
  
  .name {
    margin: auto auto 0;
  }
  .titles {
    display: flex;
    flex-direction: column;
    margin: 0 auto auto;
    
    & > * {
      margin: 0 auto;
      position: absolute;
    }
    & > svg {
      left: ~"calc( 50vw - 125px )";
      top: ~"calc( 50vh + 35px)";
    }
    & #titles {
      left: ~"calc( 50vw - 230px )";
      top: ~"calc( 50vh + 80px )";
      width: 460px;
      text-align: center;
      transform: scaleX(1.2);
      
      & > * {
        transform-origin: top center;
      }
    }
  }
  
  // .circle-enter-active, .circle-leave-active {
  //   transition: opacity .5s ease-in;
  // }
  // .circle-enter, .circle-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   opacity: 0;
  // }
  
</style>


<script>
let TWEEN = require('tween.js');

export default {
  name: 'index',
  data () {
    return {
      msg: 'works',
      show_titles: false,
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
      this.show_titles = true;
      
      let tween = new TWEEN.Tween({ r: 0 })
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
              tween = new TWEEN.Tween({ o: 0, y: 0 })
                .to( {o: 1, y: 1}, 400)
                .easing(TWEEN.Easing.Quadratic.In)
                .onUpdate( function () {
                  vm.title2 = { opacity: this.o, transform: "scaleY(" + this.y + ")" };
                })
                .start();
            });
          });
        });
      });
      
      
      // let circle_interval = setInterval( () => {
      //   this.circle_radius += .16;
      //   
      //   if ( this.circle_radius > 5 ) {
      //     clearInterval( circle_interval );
      //     
      //     let vertical_interval = setInterval( () => {
      //       this.line_height += 3.166;
      //       
      //       if ( this.line_height > 38 ) {
      //         clearInterval( vertical_interval );
      //         
      //         let horizontal_interval = setInterval( () => {
      //           this.line_halfwidth += 6.388;
      //           
      //           if ( this.line_halfwidth > 115 ) {
      //             clearInterval( horizontal_interval );
      //             
      //             let title_interval = setInterval( () => {
      //               this.title_opacity += 0.055;
      //               
      //               if ( this.title_opacity > 1 ) {
      //                 clearInterval( title_interval );
      //               }
      //             }, 16);
      //           }
      //         }, 16);
      //       }
      //     }, 16);
      //   }
      // }, 16);
    }, 500 );
  }
};
</script>
