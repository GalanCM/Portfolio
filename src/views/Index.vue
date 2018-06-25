<template>
  <div>
    <about></about>
    <portfolio></portfolio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Portfolio from "@/components/portfolio.vue";
import About from "@/components/about.vue";

@Component({
  components: { Portfolio, About }
})
export default class Index extends Vue {}
</script>
