<template>
  <header>
    <h1 class="name">GalanMontgomery</h1>
    <titles></titles>
  </header>
</template>

<style scope="local" lang="less">
  header {
    background-color: rgb(12, 27, 42);
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  h1,h2,h3 {
    font-family: Ubuntu, sans-serif;
  }
  h1 {
    font-size: 70px;
  }

  .name {
    margin: auto auto 0;
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
      msg: 'works',

    };
  }
};
</script>
