<template>
  <div class="about">
    <ul class="intro">
      <li>
        <strong>Software should delight its users.</strong> First by meeting their needs — with the features they're looking for, a good workflow,
        and an easy-to-read design. Then, in the places where it does the most good, it should be fun.
      </li>
      <li>
        <strong>Software should be built on the right foundation.</strong> Many sites use one-size-fits-all solutions, and
        when you just need something that works, that's fine. But those solutions aren't
        necessarily the fastest. Or they add unnecessary complexity. Or become difficult to maintain. The right
        tool for
        <em>a</em> job is not the right tool for
        <em>every</em> job.
      </li>
    </ul>
    <p>
      <em>I started my career in 2013, working for Getloaded,</em> a site that helped independant truckers search for loads.
      I was hired on as a mid-level developer, and had to learn quickly in order to put out the quality of work they needed.
      It was here that I realized that I wanted to use my coding skills to design, after falling into the unofficial role of
      UI expert. I helped design their admin interface, and handled the design for their mobile search results.
      In 2015, I lucked into a role as project lead for their new Android and iOS apps. I built the architecture for the apps,
      and led a small, remote team to port over views from our mobile site.
    </p>
    <p>
      <em>Since then, I have been working a variety of odd jobs,</em> mostly contracting, and generally working on improving my skills.
      I've worked to diversify my skillset, learning different tools for different situations.
      I've gotten good at building Single Page applications using tools like
      <a
        href="https://www.vuejs.org"
      >Vue</a> and
      <a href="https://www.reactjs.org">React</a>, at writing vanilla Javascript, and working with language features like CSS grid and JS promises.
      On the backend, I've supplemented my experience using MVC frameworks with both headless-CMSs and microservices.
      And I'm always looking to expand my skills on interesting projects.
    </p>
    <p>
      <em>Much of my work is influenced by my game development hobby.</em> I have over two dozen short games (of varying quality) on
      <a
        href="https://elanti.itch.io"
      >Itch.io</a>, and I publish my more polished games under the label
      <a
        href="https://www.isoteric-games.com"
      >Isoteric Games</a>. Take a look if you want to see some of my non-web work.
    </p>
    <h1>
      If you like what you see and are interested in hiring me
      <br>— freelance, contract, or full-time —
      <br>please
      <a href="mailto:galan.c.m@gmail.com">email me</a>.
    </h1>
  </div>
</template>

<style lang="less" scoped>
.about {
  display: grid;
  grid-template-columns: minmax(15px, 1fr) minmax(200px, 4fr) minmax(15px, 1fr);
  grid-auto-rows: min-content;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 80px 50px 0;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  background-color: #000a14;
  color: rgba(255, 255, 255, 0.85);
}

.intro {
  grid-column: ~"1 / 4";
  list-style: none;
  padding: 0;

  li {
    margin: 0 0 14px;

    strong {
      font-weight: 700;
      padding-right: 20px;
      color: white;
    }
  }
}

p {
  :not:first-child {
    margin-top: 30px;
  }

  &:nth-of-type(2n + 1) {
    grid-column: ~"2 / 4";
  }
  &:nth-of-type(2n + 2) {
    grid-column: ~"1 / 3";
  }
}

h1 {
  grid-column: ~"1 / 4";
  margin: 40px auto;
  font-size: 26px;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  text-align: center;
  color: white;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Index extends Vue {
  created(): void {
    window.addEventListener("scroll", () => {
      let bottom = this.$el.getBoundingClientRect().bottom;
      let header_buffer = window.matchMedia(
        "(max-width: 1024px) and (orientation: portrait)"
      ).matches
        ? 95
        : 50;

      if (bottom < header_buffer) {
        this.$emit("input", bottom - header_buffer + window.scrollY);
      } else {
        this.$emit("input", 0);
      }
    });
  }
}
</script>