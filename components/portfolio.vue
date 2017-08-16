<template>
  <section>
    <h1>Portfolio</h1>

    <svg height="40" width="100%">
      <line x1="0" y1="28px" x2="100%" y2="28px" stroke-width="2px" stroke="rgb(12, 27, 42)"></line>
    </svg>

    <span class="nav-bg">
      <div class="thumb" :style="thumb_style"></div>

      <span :class=" [ 'nav', current_tab === 'tab-websites' ? 'active' : '' ] " @click=" set_tab( 'tab-websites' )" ref="tab-websites">
        Websites
      </span>
      <span :class=" [ 'nav', current_tab === 'tab-games' ? 'active' : '' ] " @click=" set_tab( 'tab-games' )" ref="tab-games">
        Games
      </span>
    </span>

    <div class="content" :style="{ 'transform': content_transform }">
      <div class="panel">
        <div v-for=" (site, key) in sites ">
          <item :info=" site " :side=" key % 2 === 0 ? 'left' : 'right' "></item>
        </div>
      </div>
      <div class="panel">
        <h2>Timebomb</h2>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  section {
    margin-top: 60px;
    width: 100vw;
    overflow-x: hidden;
  }

  h1 {
    font-size: 40px;
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
  }

  .nav-bg {
    background-color: #dadadf;
    font-size: 20px;
    position: relative;
    top: -98px;
    left: 260px;
    box-shadow: 1px 2px 7px rgba(0,0,0,0.3) inset;
    display: inline-block;
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
      border-left: 2px solid rgb(12, 27, 42);
    }
    &:last-of-type {
      padding: 10px;
      padding-left: 5px;
      border-right: 2px solid rgb(12, 27, 42);
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
    width: 200vw;
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

<script>
  import Item from "./portfolio_item.vue";

  /* flow */
  export default {
    components: { Item },

    data() {
      return {
        current_tab: "tab-websites",
        thumb_style: {
          left: 0,
          width: '50%'
        },
        content_transform: "translateX(0)",

        sites: [
          {
            color: "#0067cf",
            url: null,
            image: null,
            title: "This Site",
            main: "This site is a work-in-progress showcase for my web development skills. " +
                  "As of right now it hosts my portfolio, but I also plan to add a blog, with a login system and comments.",
            tech: "I'm using this site to learn several new things. The foremost is gradual typing, using <a href='https://www.flow.org'>Flow</a> on the front-end and <a href='http://mypy-lang.org/'>MyPy</a> on the back. " +
                  "When implementing the server, I also plan on strengthening my NoSQL skills with MongoDB.",
            frontend: "Vue, Webpack, Babel, ESlint",
            backend: "Python, Flask, Caddy"
          },
          {
            color: "#994d00",
            url: "https://www.isoteric-games.com",
            image: "../images/isoteric-games.png",
            title: "Isoteric Games",
            main: "A responsive website that serves as a promotional web presence for my hobby games. Uses animated transitions and looks good on a mobile and desktop.",
            tech: "The main goal for this site is to be informative, so the tech is fairly simple. The front-end is designed in Vue, with a thin back-end written in Go. Since the only use for a database would have been for the occasional blog post, I opted instead for writing them as meta-tagged Markdown files.",
            frontend: "Webpack, Babel",
            backend: "Caddy"
          },
          {
            color: "#fd9001",
            url: "https://www.childfund.org/thereturn/",
            image: "../images/there-turn.png",
            title: "Childfund VR | The Return",
            main: "Informational website for Childfund’s VR experience: The Return. This is a single-page app that hosts the video and informs Childfund’s donors about its mission. Based on a design from the team artist, which I adapted for mobile.",
            tech: "Another informational site, this time build on a CMS. This was my first experience with React, and contained a number of CSS transition effects. One of the biggest challenges, though, was cleanly integrating a Google VR video.",
            frontend: "React, Webpack, Babel",
            backend: null
          },
          {
            color: "rgb(115, 168, 57)",
            url: null,
            image: "../images/getloaded-mobile.png",
            title: "Getloaded Mobile 2.0",
            main: "Getloaded Mobile was an iOS and Android apps used by over 20,000 people. I led the development of this app, and served as core architect and top-level UI designer.",
            tech: "This began as a research project to replace our aging mobile apps. My team settled on a combination of Phonegap and Ractive, which allowed us quickly convert the templates from our mobile website into components for a single-page app.",
            frontend: "Coffeescript, Less",
            backend: null
          }
          // {
          //   color: "rgb(253, 185, 19)",
          //   url: null,
          //   image: "../images/getloaded.png",
          //   title: "Getloaded",
          //   main: "Getloaded was an eCommerce site, used by over 100,000 independent truckers to find loads. Full-stack developer on a small team, where I played a major role in defining the interface for it’s mobile and admin interfaces, and built new back-end email testing and error handling systems.",
          //   tech: "This was the first major project th",
          //   frontend: "Coffeescript, jQuery, Backbone",
          //   backend: "PHP, PHP Activerecord, Postgres"
          // }
        ]
      };
    },

    mounted() {
      this.set_tab( 'tab-websites', false );
    },

    methods: {
      set_tab( tab: string, transition = true ) {
        this.current_tab = tab;

        this.thumb_style = {
          transition: transition ? "0.5s left ease-in-out, 0.5s width ease-in-out" : '',
          left: this.$refs[ tab ].offsetLeft + "px",
          width: this.$refs[ tab ].offsetWidth + "px"
        };

        if ( tab === 'tab-games' ) {
          this.content_transform = "translateX(-100vw)";
        }
        else {
          this.content_transform = "translateX(0)";
        }
      }
    }
  };
</script>
