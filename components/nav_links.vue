<template>
  <a class='header-link' href="/miniblog">{{ !is_portrait ? "Code Sample »" : "☰"}}</a>
</template>

<style lang="less" scoped>
  .header-link {
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
      line-height: 100px;
      font-size: 60px;
      right: 0;
    }
  }
</style>

<script lang="ts">
  import { Vue } from "vue-property-decorator";

  export default class NavLinks extends Vue {
    is_portrait = this.get_mode();

    get_mode(): boolean {
      return matchMedia("(max-width: 1024px) and (orientation: portrait)").matches;
  }
</script>
