<template>
  <div class="wrapper">
    <div class="color-bar" v-if=" side === 'right' || has_image !== true " :style=" { 'background-color': info.color, 'opacity': opacity } "></div>
    <div v-if=" !is_mobile && side === 'left' && has_image === true " class="img-wrapper" :style="{ 'background': info.color, 'padding-right': '50px', 'opacity': opacity }">
      <img v-if=" info.image !== null " :src=" info.image ">
      <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="details" :style="{ 'padding-left': padding.left + 'px', 'padding-right': padding.right + 'px', 'border-color': 'rgba(34,34,34,' +opacity+ ')'  }">
      <div>
        <h2>
          <span v-if=" info.url !== null ">
            <a :href="info.url">{{ info.title }} <span class="chevron">»</span></a>
          </span>
          <span v-else>
            {{ info.title }}
          </span>
        </h2>

        <div v-if=" is_mobile && ( has_image === true ) " class="img-wrapper" :style="{ 'background': info.color, 'opacity': opacity }">
          <div class="img-inner-wrapper">
            <img v-if=" info.image !== null " :src=" info.image " :style="{ 'border-color': info.color } ">
            <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen :style="{ 'border-color': info.color } "></iframe>
          </div>
        </div>

        <div class="detail-chunk" v-html=" info.main "></div>

        <div class="tech" v-if=" info.tech !== null ">
          <strong>&mdash; The Tech &mdash;</strong>
        </div>

        <div class="detail-chunk" v-html=" info.tech "></div>

        <ul v-if=" info.frontend !== null || info.backend !== null">
          <em>As for the rest of the stack…</em>
          <li><strong>Front-end:</strong> {{ info.frontend }}</li>
          <li v-if=" info.backend !== null "><strong>Back-end:</strong> {{ info.backend }}</li>
        </ul>
      </div>
    </div>

    <div v-if=" !is_mobile && side === 'right' && has_image === true " class="img-wrapper" :style="{ 'background': info.color, 'padding-left': '50px', 'opacity': opacity }">
      <img v-if=" info.image !== null " :src=" info.image ">
      <iframe v-if=" info.video !== null " :src=" 'https://www.youtube.com/embed/' + info.video + '?rel=0&showinfo=0' " frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="color-bar" v-if=" side === 'left' || has_image !== true " :style=" { 'background-color': info.color, 'opacity': opacity } "></div>
  </div>
</template>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    display: flex;

    &:last-child {
      padding-bottom: 0;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
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
      margin-bottom: 50px;
    }
  }
  img,
  iframe {
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
  }
  h2 {
    display: inline-block;
    margin: 0 auto 20px;
    font-size: 2rem;
    font-weight: 300;
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
      padding: 0 50px;
      width: auto;
      font-size: 1.7rem;
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
</style>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from "vue-property-decorator";

  @Component
  export default class PortfolioItem extends Vue {
    @Prop(Object) info: PortfolioInfo;
    @Prop(String) side: string;

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
