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
          title: "This Site",
          tagline:
            "The first site in my portfolio. A showcase for my technical and design skills."
        },
        {
          color: "#fd9001",
          siteUrl: ["Visit Site", "https://www.childfund.org/thereturn/"],
          caseStudyUrl: null,
          repoUrl: null,
          image: "there-turn.png",
          video: null,
          title: "Childfund VR",
          tagline:
            "A microsite designed to host a 360° video. Responsive design modified from a static, desktop-only mockup."
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
            "A complex Ecommerce front-end. My largest project to date, where I led a small team from initial research to final product."
        }
      ]
    };
  }
});
</script>