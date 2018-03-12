<!-- Sample single-file Vue component from my portfolio site. Handles the title animation when first visiting the site.
     Still a bit messy but it should give you an idea of what I know -->

<template>
  <transition v-on:enter="appear" name="title-transition" v-on:after-leave="after_leave()" appear> <!-- main transition for the titles -->
    <div class="titles-wrapper" v-show=" show "> <!-- titles only show on first site visit -->
      <svg width="30" :height="center_gap" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 50vh; left: calc(50vw - 15px);"> <!-- Animated line and dot -->
        <line x1="15" :y1="22*scale_factor" x2="15" :y2="(22*scale_factor)+line_height" :stroke-width="max(8*scale_factor,2)" stroke="rgba(275,255,255,.3)" />
        <circle cx="15" :cy="22*scale_factor+5" :r="circle_radius" :fill="'rgba(179,179,179,' + circle_opacity + ')'" stroke="#b3b3b3" />
      </svg>

      <div class="titles" :style="{ top: 'calc(50vh + '+center_gap+'px)' }"> <!-- wrapper for the text proper -->
        <svg :width="1505 * this.scale_factor" height="4" xmlns="http://www.w3.org/2000/svg" :style="{ position: 'absolute', top: 0, right: 0 }"> <!-- overline -->
          <line :x1="0" y1="2" :x2="line_width" y2="2" :stroke-width="max(12*scale_factor,2)" stroke="#820a0a" />
        </svg>

        <div :class="{text: true, on: show_text}" :style="{ transform: 'scale(' + scale_factor + ')', position: 'absolute', right: 0 }">
          <object class="developer" data="../images/developer.svg" type="image/svg+xml" style="position: absolute; right:0;"></object>
          <object class="and" data="../images/and.svg" type="image/svg+xml" style="position: absolute; right:0;"></object>
          <object class="designer" data="../images/designer.svg" type="image/svg+xml" style="position: absolute; right:0;"></object>
        </div>
      </div>

    </div>
  </transition>
</template>

<style lang="less" scoped>
  .titles-wrapper {
    user-select: none;
    cursor: default;
    width: 100vw;

    svg,
    .titles {
      margin: 0;
    }
  }

  h2 {
    font-size: 2em;
    margin: 20px 0 5px;

    @media (max-width: 1024px) {
      font-size: 1em;
    }
  }
  h3 {
    color: #868d95;
    font-size: 2em;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 1em;
    }
  }

  .titles {
    transform-origin: top right;
    right: 5vw;
    width: 100vw;
    position: absolute;
  }

  .text {
    transform-origin: top right;

    .developer,
    .designer,
    .and {
      opacity: 0;
    }
    .developer {
      transition: opacity 1s ease-in 0.25s;
    }
    .and {
      transition: opacity 0.5s ease-in 1.5s;
    }
    .designer {
      transition: opacity 1s ease-in 1.75s;
    }

    &.on .developer,
    &.on .designer,
    &.on .and {
      opacity: 1;
    }
  }

  .title-transition-leave-active {
    transition: 0.75s opacity ease-out 0.75s, 1s filter ease-in;
  }
  .title-transition-leave-to {
    opacity: 0;
    filter: blur(10px);
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { tween } from "shifty";

  @Component
  export default class Titles extends Vue {
    // styling properties
    circle_radius = 0;
    circle_opacity = 0;
    line_height = 0.0;
    line_width = -0.0;
    show_text = false;
    window_height = window.innerHeight;
    window_width = window.innerWidth;

    @Prop() show!: boolean; // whether or not the titles should be displayed

    created(): void {
      // make sure elements scale properly when window resizes. Important for mobile viewers.
      let vm = this;
      window.addEventListener("resize", function() {
        vm.window_height = window.innerHeight;
        vm.window_width = window.innerWidth;
      });
    }

    // Tween chain for opening animation
    // TODO: rewrite in CSS Animations
    appear(el: HTMLElement, done: () => void) {
      tween({
        from: { r: 0, o: 0.0 },
        to: { r: this.max(15 * this.scale_factor, 4), o: 1.0 },
        duration: 800,
        easing: { r: "swingTo", y: "easeOutQuad", o: "easeInQuad" },
        delay: 1000,
        step: state => {
          this.circle_radius = state.r;
          this.circle_opacity = state.o;
        }
      })
        .then(() => {
          return tween({
            from: { x: 0, y: 0 },
            to: { x: 1505 * this.scale_factor, y: this.window_height * 0.1 },
            duration: 500,
            easing: { x: "easeInQuad", y: "easeOutQuad" },
            delay: 500,
            step: state => {
              this.line_width = state.x;
              this.line_height = state.y;
            }
          });
        })
        .then(() => {
          this.show_text = true;
          done();

          setTimeout(() => {
            this.$emit("intro_complete");
          }, 1000);
        });
    }

    // let other elements know when the titles are closed, so they can run their animations
    after_leave(): void {
      this.$emit("close_intro");
    }

    // styling values that are based on window size
    get scale_factor(): number {
      if (this.window_width > this.window_height) {
        return (this.window_width + 100) * 0.5 / 1575;
      } else {
        return (this.window_width + 100) * 0.6 / 1575;
      }
    }
    get center_gap(): number {
      if (this.window_width > this.window_height) {
        return this.window_height * 0.1;
      } else {
        return this.window_height * 0.05;
      }
    }

    // helper function
    max(a, b): number {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    }
  }
</script>
