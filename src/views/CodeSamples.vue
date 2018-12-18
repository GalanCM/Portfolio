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
          color: "#0061ac",
          siteUrl: "https://tasks.galan-montgomery.com/",
          caseStudyUrl: null,
          repoUrl: "https://github.com/GalanCM/FuzzyTasks",
          image: "screenshots/fuzzytasks.png",
          video: null,
          title: "Fuzzy Tasks",
          tagline:
            "A simple planner app. Global data, forms, and a drag-and-drop interface. Made in Vue."
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
            "A barebones, view-only blog. Built-in code viewer. Made in React"
        }
      ]
    };
  }
});
</script>