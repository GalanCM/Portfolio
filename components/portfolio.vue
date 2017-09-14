<template>
  <section v-if="!intro">
    <h1>Portfolio</h1>

    <transition appear enter-to-class="horizontal-appear-to" (2.1.8+) enter-active-class="horizontal-appear-active">
      <svg height="40" width="100%" :style=" intro_transitions.horizontal ">
        <line x1="0" y1="28px" x2="100%" y2="28px" stroke-width="2px" stroke="rgb(12, 27, 42)"></line>
      </svg>
    </transition>

    <span class="nav-bg">
      <transition appear enter-to-class="vertical-appear-to" (2.1.8+) enter-active-class="vertical-appear-active">
        <div class="border" :style=" intro_transitions.vertical "></div>
      </transition>
      <div class="thumb" :style="thumb_style"></div>

      <span :class=" [ 'nav', current_tab === 'tab-websites' ? 'active' : '' ] " @click=" set_tab( 'tab-websites' )" ref="tab-websites">
        Websites
      </span>
      <span :class=" [ 'nav', current_tab === 'tab-games' ? 'active' : '' ] " @click=" set_tab( 'tab-games' )" ref="tab-games">
        Games
      </span>
    </span>

    <div class="content" :style="{ 'transform': content_transform }">
      <div class="panel" ref="panel-websites">
        <div v-for=" (site, key) in sites ">
          <item :info=" site " :side=" key % 2 === 0 ? 'left' : 'right' "></item>
        </div>
      </div>
      <div class="panel" ref="panel-games" style="margin-left: 20px;">
        <div v-for=" (game, key) in games ">
          <item :info=" game " :side=" key % 2 === 0 ? 'left' : 'right' "></item>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  section {
    margin-top: 3.5em;
    width: 100vw;
    overflow-x: hidden;
  }

  h1 {
    font-size: 2.5em;
    font-weight: 700;
    background-color: rgb(250, 250, 255);
    width: fit-content;
    padding: 10px;
    display: inline-block;
    margin: 0px;
    position: relative;
    z-index: 1;
  }

  svg {
    position: relative;
    top: -60px;

    @media ( max-device-width: 1024px ) {
      top: -85px
    }
  }

  .horizontal-appear-active {
    transform-origin: 300px center;
    transition: 0.5s transform ease-in-out 0.2s;
    transform: scaleX(0);

    @media ( max-device-width: 1024px ) {
      transform-origin: 650px center;
    }
  }
  .horizontal-appear-to {
    transform: scalex(1);
  }

  .nav-bg {
    background-color: #dadadf;
    font-size: 1.1rem;
    position: relative;
    top: -97px;
    left: 260px;
    box-shadow: 1px 2px 7px rgba(0,0,0,0.3) inset;
    display: inline-block;

    @media ( max-device-width: 1024px ) {
      left: 400px;
      top: -134px;
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

    &:not( .active ) {
      color: saturate( lighten( rgb(12, 27, 42), 30% ), 50% );
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
    box-shadow: 2px 0px 0px rgba(0,0,0,0.03);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    width: ~"calc(200vw + 20px)";
    top: -80px;
    position: relative;
    transition: 0.5s transform ease-in-out;
  }

  .panel {
    width: 100vw;
    padding: 20px 0;
    float: left;

    > div {
      max-height: 100%;
    }
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import Item from "./portfolio_item.vue";

  @Component({
    components: { Item }
  })
  export default class Portfolio extends Vue {

    @Prop()
    'intro': boolean

    'current_tab' = "tab-websites";
    'thumb_style' = {
      transition: '' as string,
      left: '0' as string,
      width: '50%' as string
    };
    'content_transform' = "translateX(0)";
    'intro_transitions' = {
      vertical: ( this.intro === true ? 'transition: 0.3s transform ease-out 3s;' : '' ) as string,
      horizontal: ( this.intro === true ? 'transition: 0.5s transform ease-in-out 3.2s;' : '') as string
    };

    'sites' = [
      {
        color: "#0067cf",
        url: null,
        image: null,
        video: null,
        title: "About This Site",
        main: "Welcome to my site. My name is Galan Montgomery, and I am a professional <strong>full-stack web developer</strong>, specializing in <strong>user experience</strong>. I've worked on a variety of projects, from small informational sites to large-scale commercial web apps with tens-of-thousands of users. Below you can see a sampling of my work, and if you want to see more interactive designs, please check out my hobbist video games in the other tab.",
        tech: "As I do with every project, I'm using this site to learn something new, in this case, it's <a href='https://www.flow.org'>Flow</a>, a gradual type checker for Javascript.",
        frontend: "Vue, Webpack, Babel, ESlint",
        backend: null
      },
      {
        color: "#994d00",
        url: "https://www.isoteric-games.com",
        image: "../images/isoteric-games.png",
        video: null,
        title: "Isoteric Games",
        main: "This is responsive website that serves as a promotional web presence for my hobby games. Make heavy use of transitions and designed for mobile first.",
        tech: "The main goal for this site is to be informative, so the tech is fairly simple. The front-end is designed in <a href='https://vuejs.org'>Vue</a>, with a thin back-end written in Go. Since the only use for a database would have been for the occasional blog post, I opted instead for writing them as meta-tagged Markdown files.",
        frontend: "Webpack, Babel",
        backend: "Caddy"
      },
      {
        color: "#fd9001",
        url: "https://www.childfund.org/thereturn/",
        image: "../images/there-turn.png",
        video: null,
        title: "Childfund VR | The Return",
        main: "An informational website for Childfund’s VR experience: The Return. This is a single-page app that hosts the video and informs Childfund’s donors about its mission. Based on a design from the team artist, which I adapted for mobile.",
        tech: "Another informational site, this time build on top of a CMS. This was my first experience with React, and contained a number of CSS transition effects. One of the biggest challenges, though, was cleanly integrating a Google VR video.",
        frontend: "React, Webpack, Babel",
        backend: "Ektron"
      },
      {
        color: "rgb(115, 168, 57)",
        url: null,
        image: "../images/getloaded-mobile.png",
        video: null,
        title: "Getloaded Mobile 2.0",
        main: "Getloaded Mobile was an app for iOS and Android. Used by over 20,000 people. I led the development of this app, and served as core architect and top-level UI designer.",
        tech: "This began as a research project to replace Getloaded's aging mobile apps. My team settled on a combination of <a href='https://phonegap.com/'>Phonegap</a> and <a href='https://ractive.js.org/'>Ractive</a>, which allowed us quickly convert the templates from our mobile website into components for a single-page app.",
        frontend: "Coffeescript, Less",
        backend: "ASP.NET"
      }
    ];

    'games' = [
      {
        color: "#0000c1",
        url: "https://www.isoteric-games.com/#timebomb",
        image: null,
        video: "xRblNIzu3BA",
        title: "Timebomb",
        main: "Timebomb is a arcade-action game for Android and iOS. Simple-to-play an hard-to-master, Timebomb takes it's influence from games like Super Hexagon and Canabalt, and shares a not-entirely-coincidental similarity to Flappy Bird.",
        tech: null,
        frontend: null,
        backend: null
      },
      {
        color: "#00dddd",
        url: "https://elanti.itch.io/squarefish",
        image: null,
        video: "lWqwd2E0f0s",
        title: "SQUAREfish",
        main: "SQUAREfish is a small action game for mobile. Originally developed in one hour for <a href='http://0hgame.eu/'>0h Game Jam</a> 2016. Over the course of the following week I polished it up into a stylish, if simple, game.",
        tech: null,
        frontend: null,
        backend: null
      },
      {
        color: "#ff523b",
        url: "https://elanti.itch.io/crownless",
        image: null,
        video: "q_ohMwydOU8",
        title: "Crownless",
        main: "Crownless is, as of August 2017, my latest of over a dozen 48 hour games developed during <a href='https://ldjam.com/'>Ludum Dare</a> competitions. It may lack the polish of the other two games, but is a good example of my design and animation skills when working under pressure.",
        tech: null,
        frontend: null,
        backend: null
      }
    ]

    mounted(): void {
      if ( this.intro === false ) {
        this.set_tab( 'tab-websites', false );
      }
    }

    @Watch('intro')
    function() {
      setTimeout ( () => {
        this.set_tab( 'tab-websites', false );
      }, 100 );
    }

    set_tab( tab: string, transition = true ): void {
      this.current_tab = tab;

      this.thumb_style = {
        transition: transition ? "0.5s left ease-in-out, 0.5s width ease-in-out" : '',
        left: ( this.$refs[ tab ] as HTMLElement ).offsetLeft + "px",
        width: ( this.$refs[ tab ] as HTMLElement ).offsetWidth + "px"
      };


      if ( tab === 'tab-games' ) {
        ( this.$refs['panel-games'] as HTMLElement ).style.height = 'auto';

        this.content_transform = "translateX( calc(-100vw - 20px) )";

        setTimeout( () => {
          ( this.$refs['panel-websites'] as HTMLElement ).style.height = '0';
        }, 500);
      }
      else {
        ( this.$refs['panel-websites'] as HTMLElement ).style.height = 'auto';

        this.content_transform = "translateX(0)";

        setTimeout( () => {
          ( this.$refs['panel-games'] as HTMLElement ).style.height = '0';
        }, 500);
      }
    }
  }
</script>
