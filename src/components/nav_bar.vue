<template>
  <nav :style="{ transform:  uncollapsed ? '' : 'translateY( -100vh ) translateY('+ 50 +'px) ',  transition: intro_transitioning ? '1s transform 1s' : '', top: position+'px', 'position': position <= 0 ? 'fixed' : 'absolute' }">
    <h1 class="name" :style=" {
      transition: intro_transitioning ? '1s left linear, 1s bottom linear' : '',
      bottom: uncollapsed ? 'calc(50vh + 5px)' : (-9)+'px',
      left: uncollapsed ? '5vw' : '0',
      'will-change': uncollapsed ? 'left, top' : '',
    } ">
      <object :data=" require( '../assets/header.svg') " type="image/svg+xml" :style="{ transition: intro_transitioning ? '1s transform ease-out' : '', transform: 'scale(' + scale_factor + ')', position: 'absolute', left: 0, bottom: 0, 'z-index': 1 }"></object>
      <object :data=" require( '../assets/header.svg') " type="image/svg+xml" :style="{ transition: intro_transitioning ? '1s transform ease-out' : '', transform: 'scale(' + scale_factor + ')', position: 'absolute', left: '1px', bottom: '-1px', filter: 'brightness(0)' }"></object>
    </h1>

    <titles :show="titles_visible" @close_intro=" close_intro " @intro_complete="show_close"></titles>

    <transition name="arrow" appear>
      <continue :style=" 'transform: scale('+scale_factor*1.5+'); transform-origin: bottom left;'" v-if="close_visible"></continue>
    </transition>

    <transition name="fade-in" appear>
      <NavLinks v-show="show_links"></NavLinks>
    </transition>

    
    <transition v-on:enter="underline_enter" appear>
      <svg class="underline" :height="12" :width="(underline_length)+'px'" :style=" 'position: absolute; bottom: '+(-10)+'px; left: 0; z-index: 0;'" v-show="!titles_visible">
        <polygon :points="'0,0, '+ (underline_length) +',0, '+(underline_length-10)+','+(14)+', 0,'+(14)+''" fill="#820a0a"/>
      </svg>
    </transition>
  </nav>
</template>

<style lang="less" scoped>
  nav {
    background-color: #001f3d;
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
  .fade-in-enter-active {
    transition: 500ms opacity ease-out;
  }
</style>


<script lang="ts">
  import { Component, Prop, Vue, Watch } from "vue-property-decorator";
  import Titles from "@/components/titles.vue";
  import Continue from "@/components/continue.vue";
  import NavLinks from "@/components/nav_links.vue";
  import { tween } from "shifty";

  @Component({
    components: { Titles, Continue, NavLinks }
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

    @Prop() uncollapsed! : boolean;
    @Prop() position! : number;

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
        to: { x: 1600 * this.scale_factor },
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
      if  (window.matchMedia("(max-width: 1024px) and (orientation: portrait)").matches) {
          return 0.22
      }
      else {
        return 0.3
      }
    }
  }
</script>
