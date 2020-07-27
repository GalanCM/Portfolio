<template>
  <div class="about">
    <section class="intro">
      <p>
        <strong>Software should delight its users.</strong> First by meeting their needs; By having the features they're looking for, a good workflow,
        and an easy-to-read design. And then, where we can, we should make our designs
        <i>fun</i>.
      </p>
      <p>
        <strong>Software should be built on the right foundation.</strong> I strive to have an understanding of a variety of patterns —
        from static site generators to microservices — and to determine which one to use only after learning the project's needs.
      </p>
    </section>
    <p>
      <em>I started my career in 2013,</em> working as a full-stack developer for a now-discontinued web app called
      <em>Getloaded</em>.
      Hired as a mid-level developer, I had to learn quickly in order to contribute quality work comparable to that of my co-workers.
      It was at Getloaded that I came to realize that I had a love for interface design, and that code itself is an interface.
      Toward the end of my time there,
      I lucked upon the opportunity to become project lead on the Getloaded Mobile 2.0 project. Not only did this give me
      the chance determine the direction of a new product, but it also broadened my perspective, introducing me to new tools and design patterns.
    </p>
    <p>
      <em>Since my time at Getloaded, I've continued learning.</em> Getloaded Mobile wasn't perfect, and there was a lot I didn't know.
      No tool is right for every project. As such, I'm always evaluating new tools;
      What problems do they solve, and who are they best for? I may not have the time to learn every tool, but it helps my work to know
      they're available. I bring this philosophy to every product that I work on.
    </p>
    <p class="contact">
      If you like what you see and are interested in hiring me
      <br />— freelance, contract, or full-time —
      <br />please
      <a href="mailto:galan.c.m@gmail.com">email me</a>.
    </p>
  </div>
</template>

<style lang="less" scoped>
@import "../base.less";

.about {
  display: grid;
  grid-template-columns: minmax(15px, 1fr) minmax(200px, 4fr) minmax(15px, 1fr);
  grid-template-rows: repeat(3, min-content) auto;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 80px 50px 0;
  .body-font-light();
  @star-color: lighten(#000a1488, 17%);
  background: radial-gradient(fade(@star-color, 80%) 3px, transparent 5px),
    radial-gradient(fade(@star-color, 50%) 4px, transparent 5px),
    radial-gradient(@star-color 2px, transparent 4px),
    radial-gradient(@star-color 1px, transparent 3px),
    linear-gradient(
      to top,
      lighten(#000a14aa, 10%) 0%,
      lighten(#000a14aa, 5%) 10%,
      transparent 100%
    ),
    #000a14cc;
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px, 100%,
    100%;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px, 0 0, 0 0;
  color: rgba(255, 255, 255, 0.85);
}

.intro {
  grid-column: ~"1 / 4";
  padding: 0;
  margin-top: 40px;
  list-style: none;
}

p {
  &:nth-of-type(2n + 1) {
    grid-column: ~"2 / 4";
  }
  &:nth-of-type(2n + 2) {
    grid-column: ~"1 / 3";
  }

  strong {
    .body-font-bold();
    padding-right: 0.5em;
    color: white;
  }
}

.contact {
  grid-column: ~"1 / 4" !important;
  align-self: center;
  margin: 40px auto !important;
  .display-font-light();
  font-size: 28px;
  text-align: center;
  color: white;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  metaInfo() {
    return {
      title: "Galan Montgomery | About",
      meta: [
        {
          name: "description",
          content:
            "About Galan Montgomery. His background and philosophy as a web developer.",
        },
      ],
    };
  },
})
export default class Index extends Vue {
  metaInfo() {
    return {
      meta: [
        {
          name: "description",
          content:
            "About Galan Montgomery. Learn about my background and philsophy as a web developer.",
        },
      ],
    };
  }
  created(): void {
    window.addEventListener("scroll", () => {
      let bottom = this.$el.getBoundingClientRect().bottom;
      let header_buffer = window.matchMedia(
        "(max-width: 1024px) and (orientation: portrait)"
      ).matches
        ? 95
        : 50;

      if (bottom < header_buffer) {
        this.$emit("input", bottom - header_buffer + document.body.scrollTop);
      } else {
        this.$emit("input", 0);
      }
    });
  }
}
</script>