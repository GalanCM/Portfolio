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
          color: "#7b36ff",
          siteUrl: "https://romantic-cori-78a771.netlify.com/",
          caseStudyUrl: null,
          repoUrl: "https://gitlab.com/galancm/emotions-ltd",
          image: "screenshots/emotions-ltd.png",
          video: null,
          title: "Emotions Ltd.",
          tagline:
            "A whimsical eCommerce app. <b>[WIP]</b><br><b>Front-end:</b> Vue, <b>Back-end:</b> Serverless & Stripe"
        },
        {
          color: "#0061ac",
          siteUrl: "https://tasks.galan-montgomery.com/",
          caseStudyUrl: null,
          repoUrl: "https://github.com/GalanCM/Errand",
          image: "screenshots/errand.png",
          video: null,
          title: "Errand",
          tagline:
            "A web application with data shared across many components. <b>[WIP]</b><br><b>Front-end:</b> Vue, <b>Back-end:</b> <i>TBA</i>"
        },
        {
          color: "#820a0a",
          siteUrl: "https://www.galan-montgomery.com/miniblog/",
          caseStudyUrl: null,
          repoUrl: "https://github.com/GalanCM/Miniblog",
          image: "screenshots/miniblog.png",
          video: null,
          title: "Miniblog",
          tagline: "A simple static blog site.<br><b>Front-end:</b> React"
        }
      ]
    };
  }
});
</script>