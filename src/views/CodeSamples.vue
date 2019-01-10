<template>
  <Projects :sites="sites"></Projects>
</template>

<script lang="ts">
import Vue from "vue";
import Projects from "@/components/projects.vue";

export default Vue.extend({
  metaInfo: {
    title: "Galan Montgomery | Sample Sites",
    meta: [
      {
        name: "description",
        content:
          "Sample web sites made by Galan Montgomery. Web applications, eCommerce applications, and statically generated sites."
      }
    ]
  },
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
          tagline: `<p>A whimsical eCommerce site with a complete checkout process. <b>[WIP]</b></p><p class="tech"><b>Front-end:</b> Vue, <b>Back-end:</b> Serverless & Stripe</p>`
        },
        {
          color: "#0061ac",
          siteUrl: "https://tasks.galan-montgomery.com/",
          caseStudyUrl: null,
          repoUrl: "https://github.com/GalanCM/Errand",
          image: "screenshots/errand.png",
          video: null,
          title: "Errand",
          tagline: `<p>A task management web application with global data management. <b>[WIP]</b></p><p class="tech"><b>Front-end:</b> Vue, <b>Back-end:</b> <i>TBD</i></p>`
        }
        // {
        //   color: "#820a0a",
        //   siteUrl: "https://www.galan-montgomery.com/miniblog/",
        //   caseStudyUrl: null,
        //   repoUrl: "https://github.com/GalanCM/Miniblog",
        //   image: "screenshots/miniblog.png",
        //   video: null,
        //   title: "Miniblog",
        //   tagline: `A lightweight static blog site.<div class="tech"><b>Front-end:</b> React</div>`
        // }
      ]
    };
  }
});
</script>

<style lang="less" >
@import "../base.less";

.portfolio-item .tech {
  font-family: @body-font;
  .body-font-regular();
}
</style>

