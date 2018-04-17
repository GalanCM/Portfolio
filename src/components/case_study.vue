<template>
  <div class="study-wrapper">
    <h2 class="subheader">Case Study</h2>
    <h1 class="header">{{ study_name }}</h1>
    
    <div class="tab-wrapper">
      <button 
        v-show=" section === null || section === 'tech' " 
        @click=" setSection('tech') "
        :class=" section === 'tech' ? 'solo': null"
      >Tech</button>
      <button 
        v-show=" section === null || section === 'design' "
         @click=" setSection('design') "
         :class=" section === 'design' ? 'solo': null"
      >Design</button>
    </div>

    <section class="main" v-show=" section !== null ">
      <section v-show=" section === 'tech' ">
        <slot name="tech-case"></slot>
      </section>
      <section v-show=" section === 'design' ">
        <slot name="design-case"></slot>
      </section>
    </section>
  </div>
</template>

<style lang="less">
  @import "../base.less";
</style>

<style lang="less" scoped>
  .study-wrapper {
    background-color: #fafaff;
    min-height: 100vh;
    width: 100vw;
    padding: 30px;
  }

  .subheader {
    margin: 0;
    line-height: 100%;
    color: #820a0a;

    @media (max-width: 1024px) and (orientation: portrait) {
      font-size: 30px;
    }
  }

  .header {
    font-size: 50px;
    margin: 0 0 30px;
    line-height: 100%;
  }

  .header,
  .subheader {
    display: inline;

    @media (max-width: 1024px) and (orientation: portrait) {
      display: block;
    }
  }

  .tab-wrapper {
    display: flex;
    width: ~"calc(100vw + 60px)";
    margin: 0 0 0 -30px;

    button {
      font-size: 30px;
      background-color: #fafaff;
      z-index: 1;
      padding-left: 30px;
      padding-right: 30px;
    }

    button:first-child {
      margin: auto 0 auto auto;
      border-right: 1px solid black;

      &.solo {
        margin: 0;
      }
    }

    button:last-child {
      margin: auto auto auto 0;
      border-left: 1px solid black;

      &.solo {
        margin: 0 0 0 auto;
      }
    }
  }

  .main {
    border-top: 2px solid black;
    margin-top: -30px;
    padding-top: 35px;
  }
</style>

<script lang="ts">
  import { Vue, Prop, Component } from "vue-property-decorator";

  @Component
  export default class PortfolioStudy extends Vue {
    @Prop(String) study_name = "Test Website";

    section = null;

    setSection(new_section) {
      if (new_section !== this.section) {
        this.section = new_section;
      } else {
        this.section = null;
      }
      console.log(this.section);
    }
  }
</script>
