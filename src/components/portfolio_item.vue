<template>
  <div class="wrapper">
    <div class="color-bar" v-if=" side === 'right' || has_image !== true " :style=" { 'background-color': info.color, 'opacity': opacity } "></div>
    <div v-if=" !is_mobile && side === 'left' && has_image === true " class="img-wrapper" :style="{ 'background': info.color, 'padding-right': '50px', 'opacity': opacity }">
      <img v-if=" info.image !== null " :src=" require( '../assets/' + info.image ) ">
      <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="details" :style="{ 'padding-left': padding.left + 'px', 'padding-right': padding.right + 'px', 'border-color': 'rgba(34,34,34,' +opacity+ ')'  }">
      <div>
        <div v-if=" is_mobile && ( has_image === true )" class="img-wrapper" :style="{ 'background': info.color, 'opacity': opacity }">
          <div class="img-inner-wrapper">
            <img v-if=" info.image !== null " :src=" require( '../assets/' + info.image ) " :style="{ 'border-color': info.color } ">
            <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen :style="{ 'border-color': info.color } "></iframe>
          </div>
        </div>
        <div v-else-if=" is_mobile " :style="{ 'min-height': '50px', 'background-color': info.color }">
        </div>

        <div class="detail-chunk">
          <h2>{{ info.title }}</h2>
          <p>{{ info.tagline }}</p>
          <a v-if=" info.url !== null " class="button primary" :href=" info.url[1] ">{{ info.url[0] }}</a>
        </div>
      </div>
    </div>

    <div v-if=" !is_mobile && side === 'right' && has_image === true " class="img-wrapper" :style="{ 'background': info.color, 'padding-left': '50px', 'opacity': opacity }">
      <img v-if=" info.image !== null " :src=" require( '../assets/' + info.image ) ">
      <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="color-bar" v-if=" side === 'left' || has_image !== true " :style=" { 'background-color': info.color, 'opacity': opacity } "></div>
  </div>
</template>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    min-height: 200px;
    display: flex;

    &:last-child {
      padding-bottom: 0;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      min-height: 100px;
    }
  }
  .color-bar {
    width: 25%;
    min-width: 200px;

    transition: 0.75s opacity ease-out 0.2s;
  }
  .img-wrapper {
    display: flex;
    flex-direction: column;

    transition: 0.75s opacity ease-out 0.2s;

    @media (min-device-width: 1024px) {
      min-height: 60vh;
    }

    @media (max-width: 1024px) {
      margin-bottom: 20px;
    }
  }
  img,
  iframe,
  img {
    width: 35vw;
    margin-top: auto;
    margin-bottom: auto;
    box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
      width: 75vw;
      box-shadow: none;
      border-left: 8px solid;
      border-right: 8px solid;
    }
  }
  iframe {
    height: ~"calc( 35vw * 0.5625 )";

    @media (max-width: 1024px) {
      height: ~"calc( 75vw * 0.5625 )";
    }
  }
  .img-inner-wrapper {
    float: right;
    margin: -1px 3% -10px 12%;
    padding: 0 20px 0px 50px;
    background-color: #fafaff;
  }

  .details {
    display: flex;
    flex-direction: column;
    width: inherit;
    border-left: 4px solid;
    border-right: 4px solid;
    border-color: rgba(34, 34, 34, 0.1);
    transition: 0.75s border-color ease-out;
    font-size: 18px;

    @media (max-width: 1024px) {
      border-left: none;
      border-right: none;
    }

    > div {
      margin: auto;

      &:first-child {
        padding: 10px 0 15px 0;
      }
    }

    a.button {
      float: right;
    }
  }
  h2 {
    display: inline-block;
    margin: 0 auto 10px;
    font-size: 2rem;
    font-weight: 600;
    width: 100%;

    > span {
      width: 100%;
      display: inline-block;
      text-align: center;
    }

    a {
      text-decoration: none;
    }

    @media (max-width: 1024px) {
      margin: 0 0 15px;
      text-align: left;
      width: auto;
      font-size: 34px;
    }

    .chevron {
      font-weight: 700;
      display: inline-block;
      transform: translateY(-2px);
    }
  }
  .detail-chunk {
    padding: 0 60px;
    margin: 5px 0;

    @media (max-width: 1024px) {
      padding: 0 40px;
    }
  }
  .tech {
    text-align: center;
    margin: 15px 0 0px;
  }
  ul {
    list-style-type: none;
    padding: 0 60px;
  }
  li {
    padding-top: 5px;
  }
</style>

<style>
  .detail-chunk p {
    margin: 0 0 0.6em 0;
  }

  .portfolio-item:first-child h2 {
    margin-top: 10px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from "vue-property-decorator";

  @Component
  export default class PortfolioItem extends Vue {
    @Prop(Object) info!: PortfolioInfo;
    @Prop(String) side!: string;

    is_mobile = false;
    opacity = 0.1;
    padding = {
      left:
        this.has_image !== true && window.innerWidth > 1100
          ? (window.innerWidth - 1100) / 2
          : 0,
      right:
        this.has_image !== true && window.innerWidth > 1100
          ? (window.innerWidth - 1100) / 2
          : 0
    };

    scroll(): void {
      if (
        this.$el.getBoundingClientRect().top < window.innerHeight / 2 &&
        this.$el.getBoundingClientRect().left < window.innerWidth
      ) {
        this.opacity = 1;
      }
    }

    resize(): void {
      this.is_mobile = window.innerWidth < 1024 ? true : false;
    }

    beforeMount() {
      this.resize();
    }

    mounted() {
      window.addEventListener("scroll", this.scroll);
      if (this.$el.getBoundingClientRect().top < window.innerHeight / 2) {
        (this.$el as HTMLElement).style.opacity = "1";
      }

      window.addEventListener("resize", this.resize);
    }

    destroyed() {
      window.removeEventListener("scroll", this.scroll);
      window.removeEventListener("resize", this.resize);
    }

    get has_image() {
      if (this.info.image === null && this.info.video === null) {
        return false;
      } else {
        return true;
      }
    }
  }
</script>
