<template>
  <CaseStudy>
    <div slot='tech-case'>
      Tech case
    </div>
    <div slot='design-case'>
      Design case
    </div>
  </CaseStudy>
</template>

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import CaseStudy from "@/components/case_study.vue";

  @Component({
    components: { CaseStudy }
  })
  export default class PortfolioStudy extends Vue {}
</script>
