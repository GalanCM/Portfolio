<template>
  <div>
    <nav-bar :uncollapsed=" intro " @close_intro=" close_intro " ></nav-bar>
    <portfolio :intro=" intro "></portfolio>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import NavBar from './nav_bar.vue';
  import Portfolio from './portfolio.vue';

  @Component({
    components: { NavBar, Portfolio }
  })
  export default class Index extends Vue {
    'intro': boolean = true // ( localStorage.getItem( 'intro' ) !== null ? false: true );

    close_intro(): void {
      this.intro = false;
      // localStorage.setItem( 'intro', 'false' );
    }
  }
</script>
