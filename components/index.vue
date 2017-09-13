<template>
  <div>
    <nav-bar :show_titles=" intro " @close_intro=" close_intro " ></nav-bar>
    <portfolio :intro=" intro "></portfolio>
  </div>
</template>

<script lang="ts">
  import NavBar from './nav_bar.vue';
  import Portfolio from './portfolio.vue';

  export default {
    components: { NavBar, Portfolio },
    data() {
      return {
        intro: ( localStorage.getItem( 'intro' ) !== null ? false: true ) as boolean
      };
    },

    methods: {
      close_intro(): void {
        this.intro = false;
        localStorage.setItem( 'intro', 'false' );
      }
    }
  };
</script>
