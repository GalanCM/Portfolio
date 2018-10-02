<template>
  <section :style="{backgroundColor: info.color}" class="item">
    <img v-if="info.image" :src="require( '@/assets/' + info.image )">
    <main>
      <h1>{{info.title}}</h1>
      <p>{{info.tagline}}</p>
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
    }
  }
}
/*.wrapper {
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

  transition: 500ms transform ease-out;
}
.img-wrapper {
  display: flex;
  flex-direction: column;

  transition: 500ms transform ease-out;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
}
img,
iframe {
  width: 35vw;
  margin-top: auto;
  margin-bottom: auto;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.2);
  transition: 1000ms opacity ease-in;

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
  margin: -1px 3% -4px 12%;
  padding: 0 20px 0px 50px;
  background-color: #fafaff;
  transition: 1000ms transform ease-out;
}

.details {
  display: flex;
  flex-direction: column;
  width: inherit;
  border-left: 4px solid;
  border-right: 4px solid;
  border-color: rgba(34, 34, 34, 1);
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
*/
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
/* // .detail-chunk p { 
//   margin: 0 0 0.6em 0;
// }

// .portfolio-item:first-child h2 {
//   margin-top: 10px;
// } */
</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class PortfolioItem extends Vue {
  @Prop(Object)
  info!: PortfolioInfo;

  is_mobile = false;
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

  resize(): void {
    this.is_mobile = window.innerWidth < 1024 ? true : false;
  }

  beforeMount() {
    this.resize();
  }

  mounted() {
    window.addEventListener("resize", this.resize);
  }

  destroyed() {
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
