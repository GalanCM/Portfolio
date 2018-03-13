<template>
  <nav :style="{ transform:  uncollapsed ? '' : 'translateY( -100vh ) translateY('+ 50*nav_scale +'px) ',  transition: intro_transitioning ? '1s transform 1s' : '', top: position+'px', 'position': position <= 0 ? 'fixed' : 'absolute' }">
    <h1 class="name" :style=" {
      transition: intro_transitioning ? '1s left linear, 1s bottom linear' : '',
      bottom: uncollapsed ? 'calc(50vh + 5px)' : (-9*nav_scale)+'px',
      left: uncollapsed ? '5vw' : '0',
      'will-change': uncollapsed ? 'left, top' : '',
    } ">
      <object data="../images/header.svg" type="image/svg+xml" :style="{ transition: intro_transitioning ? '1s transform ease-out' : '', transform: uncollapsed ? 'scale(' + scale_factor + ')' : 'scale('+ (0.27*nav_scale) +')', position: 'absolute', left: 0, bottom: 0, 'z-index': 1 }"></object>
      <object data="../images/header.svg" type="image/svg+xml" :style="{ transition: intro_transitioning ? '1s transform ease-out' : '', transform: uncollapsed ? 'scale(' + scale_factor + ')' : 'scale('+ (0.27*nav_scale) +')', position: 'absolute', left: '1px', bottom: '-1px', filter: 'brightness(0)' }"></object>
    </h1>

    <titles :show="titles_visible" @close_intro=" close_intro " @intro_complete="show_close"></titles>

    <transition name="arrow" appear>
      <continue :style=" 'transform: scale('+scale_factor*nav_scale*1.5+'); transform-origin: bottom left;'" v-if="close_visible"></continue>
    </transition>

    <transition name="fade-in" appear>
      <a v-show="show_links" href="/miniblog">Code Sample»</a>
    </transition>

    <transition v-on:enter="underline_enter" appear>
      <svg class="underline" :height="12*nav_scale" :width="(underline_length*nav_scale)+'px'" :style=" 'position: absolute; bottom: '+(-10*nav_scale)+'px; left: 0; z-index: -1;'" v-show="!titles_visible">
        <polygon :points="'0,0, '+ (underline_length*nav_scale) +',0, '+(underline_length*nav_scale-10)+','+(14*nav_scale)+', 0,'+(14*nav_scale)+''" fill="#820a0a"/>
      </svg>
    </transition>
  </nav>
</template>

<style lang="less" scoped>
  nav {
    background-color: #001b36;
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    top: 0;
    z-index: 100;
    height: 100vh;
  }

  h1 {
    position: absolute;
    margin: 0;

    object {
      transform-origin: bottom left;
    }
  }

  .close {
    position: absolute;
    left: 2.5vw;
    bottom: 2.5vw;
    cursor: pointer;
    user-select: none;
  }

  a {
    position: absolute;
    bottom: 13px;
    right: 0px;
    padding-right: 10px;
    font-weight: 200;
    font-size: 17px;
    letter-spacing: 4px;
    transition: opacity 0.7s ease-out 0s;
    color: rgba(255, 255, 255, 0.5);
    font-family: Raleway, Helvetica, sans-serif;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }

    @media (max-width: 1024px) and (orientation: portrait) {
      bottom: -100px;
      font-size: 36px;
      background-color: #001c36;
      width: 100vw;
      text-align: right;
      padding-top: 40px;
      padding-bottom: 20px;
      z-index: -1;
    }
  }

  .arrow-enter-active {
    transition: opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 2s;
  }
  .arrow-leave-active {
    transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .arrow-enter {
    opacity: 0;
  }
  .arrow-leave-to {
    opacity: 0;
  }

  .fade-in-enter {
    opacity: 0;
  }
  .fade-in-active {
    transition: 500ms opacity ease-out;
  }
</style>


<script lang="ts">
  import { Component, Prop, Vue, Watch } from "vue-property-decorator";
  import Titles from "./titles.vue";
  import Continue from "./continue.vue";
  import { tween } from "shifty";

  @Component({
    components: { Titles, Continue }
  })
  export default class NavBar extends Vue {
    intro_transitioning: boolean = false;
    titles_visible: boolean = false;
    close_visible: boolean = false;
    show_links: boolean = false;
    underline_length: number = 0;
    delay_underline: boolean = false;
    window_height = window.innerHeight;
    window_width = window.innerWidth;

    @Prop() uncollapsed!: boolean;
    @Prop() position!: number;

    created(): void {
      this.titles_visible = this.uncollapsed;
      this.delay_underline = this.uncollapsed;

      let vm = this;
      window.addEventListener("resize", function() {
        vm.window_height = window.innerHeight;
        vm.window_width = window.innerWidth;
      });
    }

    show_close(): void {
      this.close_visible = true;

      let vm = this;
      let close_hander = function() {
        vm.close_titles();

        window.removeEventListener("click", close_hander);
        window.removeEventListener("keydown", close_hander);
        window.removeEventListener("wheel", close_hander);
      };

      window.addEventListener("click", close_hander);
      window.addEventListener("keydown", close_hander);
      window.addEventListener("wheel", close_hander);
    }
    close_titles(): void {
      this.titles_visible = false;
      this.close_visible = false;
    }
    close_intro(): void {
      this.$emit("close_intro");
    }

    underline_enter(): void {
      tween({
        from: { x: 0 },
        to: { x: 430 },
        duration: 750,
        easing: "easeInOutQuad",
        delay: this.delay_underline ? 3250 : 750,
        step: state => {
          this.underline_length = state.x;
        }
      }).then( () => {
        this.show_links = true;
      });
    }

    @Watch("titles_visible")
    onTitlesChanged(): void {
      this.intro_transitioning = true;

      setTimeout(() => {
        this.intro_transitioning = false;
      }, 3000);
    }

    get scale_factor(): number {
      if (this.window_width > this.window_height) {
        return (this.window_width + 100) * 0.6 / 1575;
      } else {
        return (this.window_width + 100) * 0.7 / 1575;
      }
    }
    get nav_scale(): number {
      if (this.window_width < this.window_height) {
        return 2;
      } else {
        return 1;
      }
    }
    get center_gap(): number {
      if (this.window_width > this.window_height) {
        return this.window_height * 0.1;
      } else {
        return this.window_height * 0.05;
      }
    }
  }
</script>
