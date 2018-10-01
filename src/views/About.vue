<template>
  <div class="about">
    <ul class="intro">
      <li>
        <strong>Software should delight its users.</strong> First by meeting their needs — with the features they're looking for, a good workflow,
        and an easy-to-read design. Then, in the places where it does the most good, it should be fun.
      </li>
      <li>
        <strong>Software should be built on the right foundation.</strong> Many sites use one-size-fits-all solutions, and 
        when you just need something that works, that's fine. But those solutions aren't 
        necessarily the fastest. Or they add unnecessary complexity. Or become difficult to maintain. The right 
        tool for <em>a</em> job is not the right tool for <em>every</em> job.
      </li>
    </ul>
    <p>
      <em>I started my career in 2013, working for Getloaded,</em> a site that helpd independant truckers search for loads. 
      I was hired on as a mid-level developer, and had to learn quickly in order to put out the quality of work they needed. 
      It was here that I realized that I wanted to use my coding skills to design, after falling into the unofficial role of 
      UI expert. I helped design their admin interface, and handled the design for their mobile search results. 
      In 2015, I lucked into a role as project lead for their new Android and iOS apps. I built the architecture for the apps, 
      and led a small, remote team to port our mobile site views to it.
    </p>
    <p>
      <em>Since then, I have been working a variety of odd jobs,</em> mostly contracting, and generally working on improving my skills. 
      I've worked to diverify my skillset, learning different tools for different situation. 
      I've gotten good at building Single Page applications using tools like <a href="https://www.vuejs.org">Vue</a> and 
      <a href="https://www.reactjs.org">React</a>, at writing vanilla Javascript, and working with language features like CSS grid and JS promises. 
      On the backend, I've supplemented my knowledge of MVC backends with headless-CMS and microservices. 
      And I'm always looking to expand my skills on interesting projects.
    </p>
  </div>
</template>

<style lang="less" scoped>
.about {
  display: grid;
  grid-template-columns: minmax(15px, 1fr) minmax(200px, 4fr) minmax(15px, 1fr);
  min-height: 100vh;
  padding: 50px 50px 0;
  font-size: 18px;
  font-weight: 200;
  line-height: 1.4;
  background-color: #000a14;
  color: rgba(255, 255, 255, 0.85);
}

.intro {
  grid-column: ~"1 / 4";
  list-style: none;
  padding: 0;
  margin-bottom: 50px;

  li {
    margin: 0 0 14px;

    strong {
      font-weight: 600;
      padding-right: 20px;
      color: white;
    }
  }
}

p {
  margin: 0 0 50px 0;

  &:nth-of-type(2n + 1) {
    grid-column: ~"2 / 4";
  }
  &:nth-of-type(2n + 2) {
    grid-column: ~"1 / 3";
  }
}

h1 {
  font-size: 22px;
  font-family: Raleway, sans-serif;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.7);
  transform-origin: top center;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 18px;
  }
}
h1:nth-of-type(2) {
  text-align: right;
}
h1:not(:first-of-type) {
  margin-top: 40px;
}
h1:first-of-type {
  margin-top: 0;
}
h1:not(:last-of-type) {
  margin-bottom: 30px;
}
h1:last-of-type {
  margin-bottom: 0;
}
h1 em {
  color: rgba(255, 255, 255, 1);
  text-decoration: underline rgba(129, 10, 9, 1);
  font-size: 24px;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 20px;
  }
}
h1 strong {
  opacity: 1;
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 23px;
  }
}

h2 {
  font-size: 28px;
  font-family: Lato;
  font-weight: 200;
  font-style: normal;
  text-align: center;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.55);

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 25px;
  }
}
h2:first-of-type {
  margin: 50px 0;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 25px;
  }
}
h2 em {
  font-style: normal;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  text-decoration: underline rgba(129, 10, 9, 1);
}
.name {
  font-weight: 400;
  font-size: 42px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 34px;
  }
}
h2 strong {
  font-weight: 400;
  font-size: 30px;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 28px;
  }
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