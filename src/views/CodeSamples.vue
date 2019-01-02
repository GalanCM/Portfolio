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
            "A sample ecommerce store. Vue front-end, serverless back-end, inventory and checkout managed by Stripe. [WIP]"
        },
        {
          color: "#0061ac",
          siteUrl: "https://tasks.galan-montgomery.com/",
          caseStudyUrl: null,
          repoUrl: "https://github.com/GalanCM/FuzzyTasks",
          image: "screenshots/fuzzytasks.png",
          video: null,
          title: "Fuzzy Tasks",
          tagline:
            "A simple planner app. Global data, forms, and a drag-and-drop interface. Made in Vue. [WIP]"
        },
        {
          color: "#820a0a",
          siteUrl: "https://www.galan-montgomery.com/miniblog/",
          caseStudyUrl: null,
          repoUrl: "https://github.com/GalanCM/Miniblog",
          image: "screenshots/miniblog.png",
          video: null,
          title: "Miniblog",
          tagline:
            "A barebones, view-only blog. Built-in code viewer. Made in React. [WIP]"
        }
      ]
    };
  }
});
</script>