<template>
  <a href="/miniblog">Code Sample »</a>
</template>

<style lang="less" scoped>
  a {
    position: absolute;
    bottom: 0;
    right: 20px;
    line-height: 49px;
    padding: 0 15px 0 20px;
    font-weight: 200;
    font-size: 17px;
    letter-spacing: 4px;
    transition: background-color 0.4s ease-out;
    color: rgba(255, 255, 255, 0.7);
    font-family: Raleway, Helvetica, sans-serif;

    &:hover {
      background-color: rgba(100, 255, 255, 0.15);
      color: white;
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
</style>

<script>
  import { Vue } from "vue-property-decorator";

  export default class NavLinks extends Vue {}
</script>
