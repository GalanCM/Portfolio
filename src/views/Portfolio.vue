<template>
  <div role="presentation">
    <Projects :sites="sites"></Projects>π
    <section class="other">
      <h2>Other Projects</h2>
      <h3>
        A selection of work I
        <em>can’t</em> show you.
      </h3>
      <ul>
        <li>
          <strong>Unnamed Annotation Tool</strong>
          <em>unreleased</em> — A tool for creating and displaying large numbers of scholarly annotations. Still in development.
        </li>
        <li>
          <strong>Resay</strong> for
          <a href="https://perkbrands.com/">Perk Brands</a>
          <em>in-house</em> — A publishing tool for scheduled marketing messages. Took over feature updates and maintenance of this full-stack service.
        </li>
        <li>
          <strong>Naval Warfare</strong> for
          <a href="https://www.houstonescaperoom.com/home">Houston Escape Rooms</a>
          <em>in-house</em> — Took over and completed work for this web-based Battleship-inspired game. The core component of an escape room game.
        </li>
        <li>
          <strong>Childfund’s VR website</strong>
          <em>defunct</em> – Interactive website for hosting Childfund's 306º video, The Return. Shut down several years ago.
        </li>
        <li>
          <strong>Getloaded Mobile</strong>
          <em>defunct</em> — Let a small team to develop this mobile app for Getloaded's load board. Shut down after Getloaded was absorbed into parent company in 2017.
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import "../base.less";

div {
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url("../assets/background-portfolio.svg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.other {
  background-color: #fffc;
  padding: 40px;

  h2 {
    .nav-title();
  }
  h3 {
    .nav-tagline();
  }

  ul {
    padding: 0 5px;
  }
  li {
    display: block;
    margin-top: 10px;
    color: #50503c;
    margin-left: 2em;
    text-indent: -2em;

    strong {
      .display-font-bold();
    }
    a {
      color: #50503c !important;
      font-style: italic;
      text-decoration: underline;
    }
    em {
      margin-left: 0.75em;
      font-weight: 100;
      font-style: normal;
      color: #44c;
    }
  }
}

/deep/ .panel {
  padding-top: 10px;

  @media (max-width: 859px) {
    padding-top: 0;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import Projects from "@/components/projects.vue";

export default Vue.extend({
  metaInfo: {
    title: "Galan Montgomery | Portfolio",
    meta: [
      {
        name: "description",
        content:
          "Galan Montgomery's portfolio. Sites designed and/or developed professionally.",
      },
    ],
  },
  components: { Projects },
  data() {
    return {
      sites: [
        {
          color: "#5f3032",
          siteUrl: "https://designer.residencyapparel.com/",
          caseStudyUrl: null,
          repoUrl: null,
          image: "screenshots/residency-designer.png",
          video: null,
          title: "Residency Designer",
          tagline: `A tool for designing custom apparel.`,
          description: `<p>Built for <a href="https://residencyapparel.com" target="_blank" rel="noopener noreferrer">Residency</a>, this app allows potential customers to design and submit apparel mock-ups, before further consultation.</p>
            <p>I worked with them to build a custom interface, and handled all technical concerns.</p>`,
        },
        {
          color: "#5d41e6",
          siteUrl: "https://hashtagbreakbarriers.com/",
          caseStudyUrl: null,
          repoUrl: null,
          image: "screenshots/breakbarriers.png",
          video: null,
          title: "#BreakBarriers",
          tagline: `A promotional site.`,
          description: `<p>This site is used by motivational speaker Bishoy Tadros, to promote his book and speaking engagements.</p>
            <p>I helped him design the site to provide information to the reader in an organized manner, getting more in-depth the further they read.</p>`,
        },
      ],
    };
  },
});
</script>
