<template>
  <Projects :sites="sites"></Projects>
</template>

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
          "Galan Montgomery's portfolio. Sites designed and/or developed professionally."
      }
    ]
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
          title: "Apparel Designer",
          tagline: `<p>A custom design tool for clothing company <a href="https://residencyapparel.com" target="_blank" rel="noopener noreferrer">Residency</a>.
            <p>Worked with client to design and implement an interactive tool to help customers communicate their designs.</p>`
        },
        {
          color: "#5d41e6",
          siteUrl: "https://hashtagbreakbarriers.com/",
          caseStudyUrl: null,
          repoUrl: null,
          image: "screenshots/breakbarriers.png",
          video: null,
          title: "#BreakBarriers",
          tagline: `<p>Promotional site for motivational speaker Bishoy Tadros.</p>
            <p>I handled the design and development process: including theming, layout, coding, and hosting.</p>`
        }
      ]
    };
  }
});
</script>
