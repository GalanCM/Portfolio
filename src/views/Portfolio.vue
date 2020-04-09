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
          title: "Residency Designer",
          tagline: `<p><small>A tool for designing custom apparel.</small></p>
            <p>Built for <a href="https://residencyapparel.com" target="_blank" rel="noopener noreferrer">Residency</a>, a clothing company. Designed to help potential clients get started on new designs.</p>
            <p>I worked with them to design a user-friendly interface, and handled all technical concerns.</p>`
        },
        {
          color: "#5d41e6",
          siteUrl: "https://hashtagbreakbarriers.com/",
          caseStudyUrl: null,
          repoUrl: null,
          image: "screenshots/breakbarriers.png",
          video: null,
          title: "#BreakBarriers",
          tagline: `<p><small>A homepage for motivational speaker Bishoy Tadros.</small></p>
            <p>Intended to help promote both Bishoy's book and speaking engagements.</p>
            <p>I helped him create a design that would introduce himself in an engaging way, and built the site on a front-end only stack.</p>`
        }
      ]
    };
  }
});
</script>
