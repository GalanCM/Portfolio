<template>
  <section>
    <h1>Portfolio</h1>

    <svg height="3" width="100%" :style=" intro_transitions.horizontal">
      <line x1="0" y1="1px" x2="100%" y2="1px" stroke-width="2px" stroke="rgb(12, 27, 42)"></line>
    </svg>

    <div class="content" :style="{ 'transform': content_transform }">
      <div class="panel" ref="panel-websites">
        <div v-for=" (site, key) in sites " class="portfolio-item" :key="key">
          <item :info=" site " :side=" key % 2 === 0 ? 'left' : 'right' "></item>
        </div>
      </div>
    </div>

    <router-view class="router-wrapper" />
  </section>
</template>

<style lang="less" scoped>
section {
  width: 100%;
  overflow-x: hidden;
  background-color: rgb(250, 250, 255);
  margin-top: 20px;
  overflow-y: visible;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 25px;
  }
}

h1 {
  font-size: 2.5em;
  font-weight: 700;
  background-color: rgb(250, 250, 255);
  padding: 10px;
  display: inline-block;
  margin: 0px;
  position: absolute;
  z-index: 1;
  transform-origin: center left;
  border-right: 2px solid black;

  @media (max-width: 1024px) and (orientation: landscape) {
    transform: scale(0.8);
  }
  @media (max-width: 1024px) and (orientation: portrait) {
    transform: scale(0.4);
  }
}

svg {
  position: absolute;

  @media (max-width: 1024px) {
    top: -34px;
  }
  @media (max-width: 1024px) and (orientation: landscape) {
    top: -20px;
  }
}

.horizontal-appear-active {
  transform-origin: left center;
  transition: 0.7s transform ease-in-out;
  transform: scaleX(0);
}
.horizontal-appear-to {
  transform: scalex(1);
}

.nav-bg {
  background-color: #dadadf;
  font-size: 1.1rem;
  position: absolute;
  left: 260px;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.3) inset;
  display: inline-block;
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: 1024px) and (max-aspect-ratio: 1/1) {
    transform-origin: left center;
    transform: translateY(-50%) scale(1.2);
    left: 475px;
  }
  @media (max-width: 1024px) and (min-aspect-ratio: 1/1) {
    transform-origin: left center;
    transform: translateY(-50%) scale(0.9);
    left: 300px;
  }
}
.border {
  height: 100%;
  width: calc(100% - 1px);
  position: absolute;
  left: -1px;
  z-index: 1;
  border-left: 2px solid rgb(12, 27, 42);
  border-right: 2px solid rgb(12, 27, 42);
  pointer-events: none;
}

.vertical-appear-active {
  transition: 0.3s transform ease-out;
  transform: scaleY(0);
}
.vertical-appear-to {
  transform: scaleY(1);
}

.nav {
  display: inline-block;
  position: relative;
  font-weight: 600;

  &:not(.active) {
    color: saturate(lighten(rgb(12, 27, 42), 30%), 50%);
    cursor: pointer;
  }

  &:first-of-type {
    padding: 10px;
    padding-right: 5px;
  }
  &:last-of-type {
    padding: 10px;
    padding-left: 5px;
  }
}
.thumb {
  background-color: #fafaff;
  width: 50%;
  height: 100%;
  box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.03);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -1px;
  padding-bottom: 2px;
}

.content {
  width: ~"calc(200vw + 20px)";
  top: 0px;
  position: relative;
  transition: 0.5s transform ease-in-out;
}

.panel {
  width: 100vw;
  padding: 50px 0 0px;
  float: left;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 60px;
  }

  > div {
    max-height: 100%;
  }
}

.portfolio-item {
  margin: 50px 0 150px;

  &:last-child {
    margin-bottom: 50px;
  }
  &:first-child {
    margin-top: -50px;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    margin: 0 0 40px;

    &:last-child {
      margin-bottom: 50px;
    }
    &:first-child {
      margin-top: -60px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Item from "@/components/portfolio_item.vue";

@Component({
  components: { Item }
})
export default class Portfolio extends Vue {
  @Prop()
  intro!: boolean;
  @Prop(Boolean)
  "animation-start": boolean = false;

  content_transform = "translateX(0)";
  intro_transitions = {
    vertical: (this.intro === true
      ? "transition: 0.3s transform ease-out 3.5s;"
      : "") as string,
    horizontal: (this.intro === true
      ? "transition: 0.5s transform ease-in-out 3.7s;"
      : "") as string
  };

  sites = [
    {
      color: "#001f3d",
      url: null,
      case_study_url: null,
      image: null,
      video: null,
      title: "This Site",
      tagline:
        "The first site in my portfolio. A showcase for my technical and design skills."
    },
    {
      color: "#fd9001",
      url: ["Visit Site", "https://www.childfund.org/thereturn/"],
      case_study_url: null,
      image: "there-turn.png",
      video: null,
      title: "Childfund VR",
      tagline:
        "A microsite designed to host a 360° video. Responsive design modified from a static, desktop-only mockup."
    },
    {
      color: "rgb(115, 168, 57)",
      url: null,
      case_study_url: null,
      image: "getloaded-mobile.png",
      video: null,
      title: "Getloaded Mobile 2.0",
      tagline:
        "A complex Ecommerce front-end. My largest project to date, where I led a small team from initial research to final product."
    }
  ];
}
</script>
