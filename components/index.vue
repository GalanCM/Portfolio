<template>
  <div>
    <nav-bar :uncollapsed=" intro " @close_intro=" close_intro " ></nav-bar>
    <about></about>
    <portfolio :intro=" intro "></portfolio>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import NavBar from './nav_bar.vue';
  import Portfolio from './portfolio.vue';
  import About from './about.vue';

  @Component({
    components: { NavBar, Portfolio, About }
  })
  export default class Index extends Vue {
    'intro': boolean = ( localStorage.getItem( 'intro' ) !== null ? false: true );

    close_intro(): void {
      this.intro = false;
      localStorage.setItem( 'intro', 'false' );
    }
  }
</script>
