<template>
  <Projects :sites="sites"></Projects>
</template>

<script lang="ts">
import Vue from "vue";
import Projects from "@/components/projects.vue";

export default Vue.extend({
  components: { Projects },
  data() {
    return {
      sites: [
        {
          color: "#001f3d",
          siteUrl: null,
          caseStudyUrl: "/case_studies/portfolio",
          repoUrl: null,
          image: null,
          video: null,
          title: "This Site",
          tagline:
            "The third major iteration of this site so far, I'm constantly modifying it to best represent my current skills."
        },
        {
          color: "#5d41e6",
          siteUrl: "https://hashtagbreakbarriers.com/",
          caseStudyUrl: null,
          repoUrl: null,
          image: "breakbarriers.jpg",
          video: null,
          title: "#BreakBarriers",
          tagline:
            "Built as a promotional site for motivational speaker Bishoy Tadros. I handled the logo, design, development, and hosting."
        },
        {
          color: "#73a839",
          siteUrl: null,
          caseStudyUrl: null,
          repoUrl: null,
          image: "getloaded-mobile.png",
          video: null,
          title: "Getloaded Mobile 2.0",
          tagline:
            "Front-end for an SAAS application. My largest project to date, I led a small team from initial research to final product. Ported existing mobile site pages to a new application framework."
        }
      ]
    };
  }
});
</script>
