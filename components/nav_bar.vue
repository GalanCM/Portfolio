<template>
  <nav :style=" { height:  show_titles ? '100vh' : '3em', transition: intro_transitioning ? '1s height 1s' : '' } ">
    <h1 class="name" :style=" {
      marginLeft: show_titles ? '50px' : '0.1em',
      transform: show_titles ? 'scale(' + fullSizeHeaderScale + ')' : 'scale(0.3)',
      transition: intro_transitioning ? '1s font-size ease-in-out 1s, 1s margin ease-out 2s, 1s transform ease-out 2s' : ''
    } "><object data="../images/web header.svg" type="image/svg+xml"></object></h1>

    <titles :show="show_titles"></titles>

    <transition name="arrow" appear>
      <svg class="continue" height="50" width="50" viewbox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" v-if="show_titles" v-on:click=" $emit('close_intro') ">
          <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.75)"></circle>
          <text x="25" y="47" font-family="Ubuntu" font-size="55px" text-anchor="middle" fill="rgb(12, 27, 42)">⬇</text>
      </svg>
    </transition>
  </nav>
</template>

<style lang="less" scoped>
  nav {
    background-color: rgb(12, 27, 42);
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: 100;
  }

  h1 {
    font-size: 4em;
    margin: auto auto auto 20px;
    transform-origin: top left;

    @media ( max-height: 500px ) {
      margin-top: 0;
    }
  }

  .continue {
    position: absolute;
    left: ~"calc( 50vw - 25px )";
    top: ~"calc( 100vh - 70px )";
    cursor: pointer;
  }

  .arrow-enter-active {
    transition: opacity 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) 2s;

    text {
      transition: transform 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53) 2.25s;
    }
  }
  .arrow-leave-active {
    transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .arrow-enter {
    opacity: 0;

    text {
      transform: translateY(-51px);
    }
  }
  .arrow-leave-to {
    opacity: 0;
    transform: scale(2);
  }
</style>


<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import Titles from "./titles.vue";

  @Component({
    components: { Titles }
  })
  export default class NavBar extends Vue {
    'intro_transitioning': boolean = false;

    @Prop(Boolean)
    'show_titles': boolean;

    @Watch('show_titles')
    onTitlesChanged(): void {
      this.intro_transitioning = true;

      setTimeout( () => {
        this.intro_transitioning = false;
      }, 3000 );
    }

    get fullSizeHeaderScale() : number {
      return window.innerWidth * 0.6 / 1575;
    }
  }
</script>
