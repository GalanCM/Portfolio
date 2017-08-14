<template>
  <div>
    <nav-bar></nav-bar>
    <portfolio></portfolio>
  </div>
</template>

<script>
  import NavBar from './nav_bar.vue';
  import Portfolio from './portfolio.vue';

  export default {
    components: { NavBar, Portfolio }
  };
</script>
