<template>
  <div>
    <nav>
    </nav>
    <div class="intro">
      <div class="top">
        <img class="name" src="../assets/header.svg" />
      </div>
      <div class="line"></div>
      <div class="bottom">
        <div class="titles">
          <div class="web">Web UX Engineer</div>
          <div class="and">&</div>
          <div class="game">Game Developer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.intro {
  height: 100vh;
  width: 100vw;

  .top {
    position: fixed;
    width: 100vw;
    height: 50vh;
    min-height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #001f3d;
    z-index: 100;

    .name {
      z-index: 1;
      left: 2%;
      width: 90vw;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.6));
      margin-top: auto;
      position: relative;
      transform: translateY(15%);
    }
  }
  .line {
    position: fixed;
    top: 50vh;
    width: 100vw;
    height: 1.4vw;
    background-color: #820a0a;
    z-index: 100;
  }

  .bottom {
    height: 50vh;
    padding-top: calc(50vh + 1.4vw);
    min-height: fit-content;
    padding-bottom: 55px;
    background-color: #000a14;

    .titles {
      position: relative;
      top: 5px;
      font-size: calc(50vw / 9);
      line-height: 1;
      right: 2%;
      font-family: Raleway, Helvetica, sans-serif;
      float: right;

      .web {
        font-weight: 200;
        color: white;
      }
      .game {
        font-weight: 400;
        color: rgba(232, 232, 247, 0.8);
      }
      .and {
        position: absolute;
        transform: translateX(calc(-100% - 10px));
        font-weight: 200;
        color: rgba(225, 225, 255, 0.3);
      }
    }
  }
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
