<template>
  <div class="study-wrapper">
    <div class="header-wrapper">
      <h2 class="subheader">Case Study</h2>
      <h1 class="header">{{ studyName }}</h1>
    </div>

    <div class="tab-wrapper">
        <button 
          v-show=" section === null || section === 'tech' " 
          @click=" setSection('tech') "
          class="section-tab"
          :class=" section === 'tech' ? 'solo': null"
        >
          Tech
          <span class="close-icon">×</span>
        </button>
   
        <button 
          v-show=" section === null || section === 'design' "
          @click=" setSection('design') "
          class="section-tab"
          :class=" section === 'design' ? 'solo': null"
        >
          <span class="close-icon">×</span>
          Design
        </button>
    </div>

    <section class="main" v-show=" section === null ">
      <h1 class="decision"><strong>Which lens</strong> do you want to study <em>{{studyName}}</em> through?</h1>
    </section>

    <transition name="fade">
      <section class="main full" v-show=" section !== null ">
        <section v-show=" section === 'tech' ">
          <slot name="tech-case"></slot>
        </section>
        <section v-show=" section === 'design' ">
          <slot name="design-case"></slot>
        </section>
      </section>
    </transition>
  </div>
</template>

<style lang="less">
@import "../base.less";
</style>

<style lang="less" scoped>
.study-wrapper {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.header-wrapper {
  background-color: #001f3d;
  display: inline-block;
  padding: 15px 30px;
  margin: 30px auto 30px 30px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
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
  margin: 0;
  line-height: 100%;
  color: #f2f2f2;
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
  margin: 0 0 0 -30px;

  .section-tab {
    font-size: 30px;
    background-color: #fafaff;
    z-index: 1;
    padding: 12px 30px 5px;
    position: absolute;
    transition: 500ms transform ease-out;
  }

  .section-tab:first-child {
    transform: translateX(calc(~"50vw - 100%"));
    border-right: 2px solid black;
    padding-right: 20px;

    &.solo {
      transform: translateX(30px);
      border-right: 4px solid black;

      .close-icon {
        opacity: 1;
        transition: 300ms opacity ease-out 700ms;
      }
    }

    .close-icon {
      left: 5px;
    }
  }

  .section-tab:last-child {
    transform: translateX(50vw);
    border-left: 2px solid black;
    padding-left: 20px;

    &.solo {
      border-left: 4px solid black;
      transform: translateX(calc(~"100vw - 100% + 30px"));
    }

    .close-icon {
      left: -5px;
    }
  }

  .close-icon {
    font-weight: 200;
    background-color: #ddd;
    padding: 0 4px;
    font-size: 24px;
    border-radius: 2px;
    position: relative;
    vertical-align: text-top;
    opacity: 0;
  }
  .solo .close-icon {
    opacity: 1;
    transition: 300ms opacity ease-out 700ms;
  }
}

.main {
  margin-top: 15px;
  padding-top: 50px;
  background-color: #fafaff;
  clip-path: polygon(0 0, 105% 0, 105% 105%, 0 105%);
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
}
.main.full {
  border-top: 2px solid black;
  flex-grow: 1;
}

.decision {
  margin: -15px 0 10px 0;
  text-align: center;
  font-weight: 400;
  color: #777;

  strong {
    color: #333;
    font-weight: 700;
  }

  em {
    color: #333;
    font-weight: 200;
  }
}

// TRANSITIONS

.fade-enter-active {
  transition: 500ms opacity ease-in, 600ms clip-path ease-in 300ms;
  // transition: 300ms clip-path ease-in;
}
.fade-leave-active {
  transition: 300ms opacity ease-in, 300ms clip-path ease-in;
  // transition: 300ms clip-path ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  clip-path: polygon(0 0, 100% 0, 100% 2px, 0 2px);
}
</style>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class CaseStudy extends Vue {
  @Prop(String) studyName?: string;

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
