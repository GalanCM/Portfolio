<template>
  <div>
    <nav-bar :show_titles=" intro " @close_intro=" close_intro " ></nav-bar>
    <portfolio :intro=" intro "></portfolio>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import NavBar from './nav_bar.vue';
  import Portfolio from './portfolio.vue';

  @Component({
    components: { NavBar, Portfolio }
  })
  export default class Index extends Vue {
    'intro': boolean =  ( localStorage.getItem( 'intro' ) !== null ? false: true );

    close_intro(): void {
      this.intro = false;
      localStorage.setItem( 'intro', 'false' );
    }

  }
</script>
