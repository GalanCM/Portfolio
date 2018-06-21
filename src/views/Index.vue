<template>
  <div>
    <nav-bar v-model=" show_titles "></nav-bar>
    <div v-if=" !show_titles ">
      <about></about>
      <portfolio></portfolio>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/nav_bar.vue";
import Portfolio from "@/components/portfolio.vue";
import About from "@/components/about.vue";

@Component({
  components: { NavBar, Portfolio, About }
})
export default class Index extends Vue {
  show_titles: boolean = true; //localStorage.getItem("intro", "false");

  close_intro(): void {
    localStorage.setItem("intro", "false");
  }
}
</script>
