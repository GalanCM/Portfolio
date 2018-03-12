<template>
  <section v-if="!intro">
    <h1>Portfolio</h1>

    <transition enter-to-class="horizontal-appear-to" enter-active-class="horizontal-appear-active">
      <svg height="3" width="100%" :style=" intro_transitions.horizontal" v-if="animationStart">
        <line x1="0" y1="1px" x2="100%" y2="1px" stroke-width="2px" stroke="rgb(12, 27, 42)"></line>
      </svg>
    </transition>

    <div class="content" :style="{ 'transform': content_transform }">
      <div class="panel" ref="panel-websites">
        <div v-for=" (site, key) in sites " class="portfolio-item" :key="key">
          <item :info=" site " :side=" key % 2 === 0 ? 'left' : 'right' "></item>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  section {
    width: 100vw;
    overflow-x: hidden;
    background-color: rgb(250, 250, 255);
    margin-top: 90px;
    overflow-y: visible;

    @media (max-width: 1024px) and (orientation: portrait) {
      margin-top: 180px;
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
    transform: translateY(-50%);
    border-right: 2px solid black;

    @media (max-width: 1024px) and (orientation: landscape) {
      transform: translateY(-50%) scale(0.8);
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
      margin-top: -35px;
    }
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from "vue-property-decorator";
  import Item from "./portfolio_item.vue";

  @Component({
    components: { Item }
  })
  export default class Portfolio extends Vue {
    @Prop(Boolean) intro: boolean;
    @Prop(Boolean) "animation-start": boolean = false;

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
        color: "#001b36",
        url: null,
        image: null,
        video: null,
        title: "About This Site",
        main:
          "<p>This site is both a showcase for some my best work, and a part of the the showcase itself. \
                    I am using this as an opportunity to show off.</p>\
                    <p>Interaction is still simple though: vertical scrolling will get you all of relevant information, and links will take you to the sites.</p>",
        tech:
          "<p>This is also a showcase for my coding skills, and you can even see the source <a href='https://github.com/GalanCM/Portfolio'>on Github</a>. \
                    The tech stack — a static site built in the <a href='https://vuejs.org/'>Vue</a> framework and running on a lightweight <a href='https://caddyserver.com/'>Caddy</a> server — was largely chosen for fast setup and iteration time, and all components and effects were coded from scratch. \
                    <p>I also used this as an opportunity for some experimenting, learning to work with gradual typing via <a href='https://www.typescriptlang.org/'>Typescript</a>.</p>",
        frontend: null,
        backend: null
      },
      {
        color: "#994d00",
        url: "https://www.isoteric-games.com",
        image: "../images/isoteric-games.png",
        video: null,
        title: "Isoteric Games",
        main:
          "<p>In addition being a professional web developer, I also make games. \
                    <strong><em>Isoteric</em></strong> serves as a promotional outlet for some of the more polished ones.</p>\
                    <p>Like this site, isoteric-games.com is informational, and uses a vertical scolling layout. \
                    I used animations and page transitions to give the site a more dynamic feel.</p>",
        tech:
          "<p>Also similar to this portfolio, Isoteric's site is built on <a href='https://vuejs.org/'>Vue</a> for rapid iteration.</p>\
                    <p>The backend is a bit more beefy, with news articles hosted on a lightweight <a href='https://golang.org/'>Go</a> server, which hosts the both the page and a RESTful api for the blog.",
        frontend: null,
        backend: null
      },
      {
        color: "#0000c1",
        url: "https://www.isoteric-games.com/#timebomb",
        image: null,
        video: "xRblNIzu3BA",
        title: "Timebomb",
        main:
          "<p>Speaking of games, audiences expect them to be more expressive and eye-catching than websites. \
                    It should come as no surprise then that <em>Timebomb</em> is the most expressive experience I've developed.</p>\
                    <p>Starting as a 48-hour game during <a href='https://ldjam.com/'>Ludum Dare</a> 34, I used my spare time over the next year-and-a-half to polish it. \
                    You can get a good feel for the process by playing both the <a href='https://isoteric-games.itch.io/timebomb-web'>final version</a> and the <a href='https://elanti.itch.io/timebomb'>original</a>.</p>\
                    <p>I improved in a <strong>lot</strong> of areas while developing this game, from animation and sound design to usability testing, and the final product speaks for itself.</p>",
        tech: null,
        frontend: null,
        backend: null
      },
      {
        color: "#fd9001",
        url: "https://www.childfund.org/thereturn/",
        image: "../images/there-turn.png",
        video: null,
        title: "Childfund VR",
        main:
          "<p>Childfund VR: The Return, is a VR documentary sponsored by Childfund to promote their charity.</p> \
                    <p>Based on a Photoshop mockup from their artist, I was responsible for creating the site. This involved some <em>slight</em> tweaks to the interaction design, and heavier modifications for mobile.</p>",
        tech:
          "<p>This the first and largest site I've built in <a href='https://reactjs.org/'>React</a>, which I chose primarily as an opportunity to learn the popular framework.</p>\
                    <p>One of the bigger challenges with this site was incorporating the Youtube 360º video seemlessly into the UI in a way that was easy to understand on both desktop and mobile.",
        frontend: null,
        backend: null
      },
      {
        color: "rgb(115, 168, 57)",
        url: null,
        image: "../images/getloaded-mobile.png",
        video: null,
        title: "Getloaded Mobile 2.0",
        main:
          "<p>Getloaded Mobile was a popular website, used by independent truckers to find loads. In 2015, I led a small team to build new Android and iOS apps to supplement the site.</p>\
                    <p>Sadly, Getloaded was closed down by their parent company the next year and the apps are no longer availible, but I'm still exceedingly proud my team's work.</p>",
        tech:
          "<p>At the time, the fastest approach to porting a web app to mobile was <a href='https://phonegap.com/'>Phonegap</a>, with a Javascript framework to handle templating and back-end logic. \
                    After an initial prototype using Angular I ultimately settled on <a href='https://ractive.js.org/'>Ractive</a>, which had a largely comparable templating language to PHP, and caused less friction with our existing stack.</p>",
        frontend: null,
        backend: null
      }
    ];
  }
</script>
