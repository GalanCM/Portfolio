<template>
  <section class="about">
    <div class="overview" role="presentation">
      <p>Since starting my first job as a web developer in 2013, I have worked across the software stack, from server architecture to graphic design. My strength is on the front-end: designing interfaces and managing the data that drives them — but I’m comfortable working on all tasks needed to build a website or application.</p>
      <p>I’ve worked as both employee and freelancer for large corporations, startups, charities and individuals. One thing that I’ve taken away from my experiences is that every project’s needs are unique, and that solutions that solve one problem may not work for another.</p>
    </div>
    <p
      class="segue"
    >In order to tackle each project on its own merits, I've focused my skills into two major areas:</p>
    <div class="focuses" role="presentation">
      <h2>One.</h2>
      <p>
        <strong>I evaluate every software dependency that I add to a project.</strong> Whenever you add to a website, it brings different tradeoffs between performance, complexity, and flexibility — and every project needs to prioritize these differently. Whether I’m determining the architecture for a site, or adding a third-party dependency, I want to make sure to balance those priorities in a way that works for the project at hand, rather than taking a single solution and trying to apply it to every problem.
      </p>
      <h2>Two.</h2>
      <p>
        <strong>I bring a distinct look to every design.</strong> Themes and UI toolkits can be a great starting point, and work fine for many projects even through completion, but they can become
        <em>too</em> rigid — then the tools start dictating the design. Whether building a design system from scratch or modifying pre-existing work, I want my client's sites to have a look unique to their professional or personal brands.
      </p>
    </div>
  </section>
</template>

<style lang="less" scoped>
@import "../base.less";

.about {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: calc(100vh - 150px);
  justify-content: space-evenly;
  margin-top: 50px;
  padding: 50px 100px;
  .body-font-light();

  @star-color: lighten(#000a1488, 17%);
  background: linear-gradient(
      90deg,
      transparent 0%,
      darken(#001f3d99, 3%) 150px,
      darken(#001f3d99, 3%) calc(100% - 150px),
      transparent 100%
    ),
    radial-gradient(fade(@star-color, 80%) 3px, transparent 5px),
    radial-gradient(fade(@star-color, 50%) 4px, transparent 5px),
    radial-gradient(@star-color 2px, transparent 4px),
    radial-gradient(@star-color 1px, transparent 3px),
    linear-gradient(
      to top,
      lighten(#000a14aa, 10%) 0%,
      lighten(#000a14aa, 5%) 10%,
      transparent 100%
    ),
    rgba(0, 10, 20, 0.8);
  background-size: 100% 100%, 550px 550px, 350px 350px, 250px 250px, 150px 150px,
    100%, 100%;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px, 0 0, 0 0;
  color: rgba(255, 255, 255, 0.85);

  .overview {
    column-count: 2;
    gap: 80px;
    column-rule: 1px solid #fff8;
    padding: 20px 40px;
    line-height: 1.7;
  }

  .segue {
    margin: 50px 0;
    font-size: 20px;
    font-style: italic;
    line-height: 1.2;
    opacity: 0.7;
  }

  .focuses {
    padding: 20px 40px;

    h2 {
      width: 90%;
      margin: 0 0 5px;
      border-bottom: 1px solid #fff8;
      .display-font-bold();
      font-size: 26px;
      line-height: 1.1;
      color: #fffc;
    }

    p {
      text-align: justify;
      margin: 0;
      line-height: 1.7;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      strong {
        .body-font-bold();
      }
    }
  }

  @media (max-width: 839px) {
    margin-top: 77px;
    padding: 25px 10px;

    .overview {
      column-count: 1;
    }

    .segue {
      margin: 30px 5px;
    }

    .focuses p {
      text-align: left;
    }
  }
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