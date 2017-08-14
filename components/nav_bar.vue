<template>
  <nav :style=" { height:  show_titles ? '100vh' : '60px' } ">
    <h1 class="name" :style=" {
      fontSize:  show_titles ? '70px' : '40px',
      marginLeft: show_titles ? '50vw' : '20px',
      transform: show_titles ? 'translateX( -50% )' : 'translateX( 0 )'
    } ">GalanMontgomery</h1>

    <titles :show="show_titles"></titles>

    <transition name="arrow" appear>
      <svg class="continue" height="50" width="50" viewbox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" v-if="show_titles" v-on:click="show_titles= false">
          <circle cx="25" cy="25" r="25" fill="rgba(255,255,255,0.75)"></circle>
          <text x="25" y="47" font-family="Ubuntu" font-size="57" text-anchor="middle" fill="rgb(12, 27, 42)">⬇</text>
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
    transition: 1s height 1s;
    position: absolute;
    top: 0;
    z-index: 100;
  }

  h1,h2,h3 {
    font-family: Ubuntu, sans-serif;
  }
  h1 {
    font-size: 70px;
    transition: 1s font-size ease-in-out 1s,
      1s margin ease-out 2s,
      1s transform ease-out 2s;
    margin: auto auto auto 20px;
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


<script>
  /* @flow */
  import Titles from "./titles.vue";

  export default {
    name: 'index',
    components: { Titles },
    data () {
      return {
        show_titles: false
      };
    }
  };
</script>
