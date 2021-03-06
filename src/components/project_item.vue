<template>
  <section :style="{ '--item-color': info.color }" class="item">
    <img v-if="info.image" :src="require('@/assets/' + info.image)" />
    <main>
      <div class="title">{{ info.title }}</div>
      <div class="tagline">{{info.tagline}}</div>
      <div class="description" v-html="info.description"></div>
      <div class="buttons">
        <a class="button" :href="info.repoUrl" v-if="info.repoUrl !== null">View Code</a>
        <router-link
          class="button"
          :to="info.caseStudyUrl"
          v-if="info.caseStudyUrl !== null"
        >Case Study</router-link>
        <a
          class="button primary"
          :href="info.siteUrl"
          v-if="info.siteUrl !== null"
          target="_blank"
          rel="noopener noreferrer"
        >Visit Site</a>
      </div>
    </main>
    <div class="color-bar" aria-hidden="true" />
    <div class="color-bar2" aria-hidden="true">
      <div></div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import "../base.less";

.item {
  display: grid;
  grid-template-columns: minmax(min-content, 600px) minmax(200px, 50%) 1fr;
  grid-template-rows: min-content 1fr;
  width: 100%;

  @media (max-width: 839px) {
    grid-template-columns: min-content 1fr !important;
    grid-auto-rows: minmax(50px, auto);
  }

  img {
    grid-row: 1;
    width: 100%;
    object-fit: cover;
    margin: 0;
    background-color: black;

    @media (max-width: 839px) {
      max-height: 30vh;
      max-height: 30vmax;
      width: auto;
      max-width: 100vw;
      padding-right: 0.6vw;
      object-fit: cover;
    }
  }

  .color-bar {
    grid-row: 1 / span 2;
    background-color: var(--item-color);
    width: 100%;
    height: 100%;

    @media (max-width: 839px) {
      grid-row: 1;
    }
  }

  .color-bar2 {
    grid-column: 1;
    grid-row: 2;
    box-sizing: border-box;
    background-color: var(--item-color);
    width: 100%;
    height: 100%;

    div {
      background-color: black;
      height: 5%;
      width: 100%;
    }

    @media (max-width: 839px) {
      display: none;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    grid-column: 2;
    grid-row: 1 / span 2;
    max-width: calc(100vw - 20px);
    height: auto;
    min-height: 120px;
    padding: 5px 15px;
    border-left: 4px solid black;
    border-right: 4px solid black;
    background-color: #fffc;
    backdrop-filter: blur(1px);

    @media (max-width: 839px) {
      grid-column: ~"1 / 3";
      grid-row: 2;
      padding: 3px 12px 5px;
      border-left: none;
      border-right: none;
      border-top: 4px solid black;
    }

    > :first-child {
      margin-top: 20px;
    }
    > :last-child {
      margin-bottom: 20px;
    }

    .title {
      .nav-title();
      width: 80%;
      margin: 7px 0 3px;
      border-bottom: 1px solid #0008;
      font-size: 26px;
      line-height: 1;
      color: #346;

      @media (max-width: 839px) {
        width: 90%;
      }
    }
    .tagline {
      .nav-tagline();
      margin-bottom: 20px;
    }

    .buttons {
      display: flex;
      min-height: 30px;
      margin: 20px 0 5px;
    }
  }

  .description {
    margin: auto 20px;

    /deep/ p {
      line-height: 1.6;

      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
}

.portfolio-item {
  &:nth-child(even) .item {
    grid-template-columns: 1fr minmax(200px, 50%) minmax(min-content, 600px);
  }

  &:nth-child(odd) img {
    grid-column: 1;

    @media (max-width: 839px) {
      grid-column: 1;
    }
  }
  &:nth-child(even) img {
    grid-column: 3;
    @media (max-width: 839px) {
      grid-column: 1;
    }
  }
  &:nth-child(odd) .color-bar {
    grid-column: 3;
    margin-right: auto;

    @media (max-width: 839px) {
      grid-column: 2;
    }
  }
  &:nth-child(even) .color-bar {
    grid-column: 1;
    margin-left: auto;

    @media (max-width: 839px) {
      grid-column: 2;
    }
  }
  &:nth-child(even) .color-bar2 {
    grid-column: 3;
    grid-row: 2;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class ProjectItem extends Vue {
  @Prop(Object)
  info!: PortfolioInfo;
}
</script>
