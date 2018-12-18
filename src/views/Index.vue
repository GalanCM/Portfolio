<template>
  <div>
    <Portfolio></Portfolio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Portfolio from "@/components/portfolio.vue";

@Component({
  components: { Portfolio }
})
export default class Index extends Vue {}
</script>
