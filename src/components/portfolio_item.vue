<template>
  <section :style="{backgroundColor: info.color}" class="item">
    <img v-if="info.image" :src="require( '@/assets/' + info.image )">
    <main>
      <h1>{{info.title}}</h1>
      <p>{{info.tagline}}</p>
      <div class="buttons">
        <a class="button" :href="info.repoUrl" v-if="info.repoUrl !== null">Github</a>
        <a class="button" :href="info.caseStudyUrl" v-if="info.caseStudyUrl !== null">Case Study</a>
        <a class="button primary" :href="info.siteUrl" v-if="info.siteUrl !== null">Visit Site</a>
      </div>
    </main>
  </section>
</template>

<style lang="less" scoped>
.item {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, auto));
  grid-gap: 30px;
  width: 100%;

  @media (max-width: 839px) {
    grid-template-columns: 20px auto;
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 0;
  }

  img {
    height: 50vh;
    min-height: 150px;
    max-height: 300px;
    object-fit: contain;
    margin: auto 0;

    @media (max-width: 839px) {
      height: 22vh;
      margin: 0 20px !important;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    grid-column: 2;
    grid-row: 1;
    height: auto;
    background-color: #fafaff;
    padding: 10px 50px 15px;
    border-left: 4px solid black;
    border-right: 4px solid black;
    min-height: 120px;

    @media (max-width: 839px) {
      grid-column: ~"1 / 3";
      grid-row: 2;
      border-left: none;
      border-right: none;
      border-top: 4px solid black;
    }

    :first-child {
      margin-top: auto;
    }
    :last-child {
      margin-bottom: auto;
    }

    h1 {
      margin-bottom: 5px;
    }
    p {
      margin-top: 0;
      font-size: 18px;
      color: #50503c;
    }

    .buttons {
      display: flex;

      a {
        margin: 10px;

        &:first-child {
          margin-left: auto;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>

<style lang="less">
.portfolio-item {
  &:nth-child(odd) img {
    grid-column: 1;
    margin-right: auto;

    @media (max-width: 839px) {
      grid-column: 1;
    }
  }
  &:nth-child(even) img {
    grid-column: 3;
    margin-left: auto;

    @media (max-width: 839px) {
      grid-column: 1;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class PortfolioItem extends Vue {
  @Prop(Object)
  info!: PortfolioInfo;
}
</script>
