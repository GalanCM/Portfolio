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
          caseStudyUrl: null,
          repoUrl: null,
          image: null,
          video: null,
          title: "galan-montgomery.com",
          tagline:
            "This site. A personal site, it is constantly changing — for better or worse. Representative of my latest design skills."
        },
        {
          color: "#fd9001",
          siteUrl: "https://www.childfund.org/thereturn/",
          caseStudyUrl: null,
          repoUrl: null,
          image: "there-turn.png",
          video: null,
          title: "Childfund VR",
          tagline:
            "A microsite built to host a 360º video. An example of my client work, I was given a desktop-only mockup, and had to modify it into a responsive design."
        },
        {
          color: "rgb(115, 168, 57)",
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
