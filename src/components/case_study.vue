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
      <h1 class="decision"><strong>Which aspect</strong> of <em>{{studyName}}</em> would you like to learn about?</h1>
    </section>

    <transition name="fade">
      <section class="main full" v-show=" section !== null ">
        <slot name="tech-case" v-if=" section === 'tech' "></slot>
        <slot name="design-case"  v-if=" section === 'design' "></slot>
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
  max-width: calc(~"100vw - 120px");
}

.subheader {
  margin: 0;
  line-height: 100%;
  color: #820a0a;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 30px;
    text-align: right;
  }
}

.header {
  font-size: 50px;
  margin: 0 0 0 -5px;
  line-height: 100%;
  color: #f2f2f2;

  @media (max-width: 1024px) and (orientation: portrait) {
    margin: -5px 0 0 0;
  }
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
  margin: 0;
  user-select: none;

  .section-tab {
    font-size: 30px;
    background-color: #fafaff;
    z-index: 1;
    padding: 7px 30px 1px;
    position: absolute;
    transition: 500ms transform ease-out;

    @media screen and (max-width: 1024px) {
      font-size: 22px;
    }

    &:focus {
      outline: none;
    }
  }

  .section-tab:first-child {
    transform: translateX(calc(~"(50vw - 100%) - 15px + 2px"));
    border-right: 4px solid black;
    padding-right: 20px;

    &.solo {
      transform: translateX(0);
    }

    .close-icon {
      left: 5px;
    }
  }

  .section-tab:last-child {
    transform: translateX(calc(~"50vw - 15px - 2px"));
    border-left: 4px solid black;
    padding-left: 20px;

    &.solo {
      transform: translateX(calc(~"100vw - 100%"));
    }

    .close-icon {
      right: 5px;
    }
  }

  .close-icon {
    display: inline-block; // Webkit display glitch workaround
    font-weight: 200;
    background-color: #ddd;
    line-height: 0;
    padding: 12px 4px;
    font-size: 24px;
    border-radius: 2px;
    position: relative;
    top: -3px;
    opacity: 0;

    @media screen and (max-width: 1024px) {
      margin-top: 1px;
      font-size: 20px;
    }
  }
  .solo .close-icon {
    opacity: 1;
    transition: 500ms opacity ease-out 500ms;
  }
}

.study-wrapper {
  @media screen and (max-width: 1024px) {
    font-size: 40%;
  }
}

.main {
  margin-top: 15px;
  padding-top: 50px;
  background-color: #fafaff;
  border-top: 2px solid black;
  clip-path: polygon(0 0, 105% 0, 105% 105%, 0 105%);
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 1024px) {
    padding-top: 40px;
  }
}
.main.full {
  border-top: 2px solid black;
  flex-grow: 1;
  display: flex;
}

.decision {
  margin: -15px 0 10px 0;
  text-align: center;
  font-weight: 400;
  color: #777;
  padding: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }

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

<style lang="less">
.study-wrapper .main.full {
  .case {
    width: 100%;
    display: flex;
    flex-direction: column;

    .mission {
      font-weight: 700;
      font-size: 24px;
      line-height: 1.7;
      color: #346;
      margin: 30px calc(~"(100vw - 1064px) / 2") 50px calc(~"(100vw - 1064px) / 2");
      font-family: Lato, "sans-serif";
      border-left: 4px solid #3467;
      border-right: 4px solid #3467;
      padding: 0 20px;
      text-align: justify;

      @media screen and (max-width: 1024px) {
        margin-left: 30px;
        margin-right: 30px;
        padding: 0;
        border: none;
        font-size: 22px;
      }
      em {
        font-weight: 200;
      }
    }

    .question {
      display: flex;

      @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 0 !important;
      }

      .header-short {
        margin: 0;
        color: #346;
        font-size: 32px;
      }
      .header-long {
        margin: -5px 0 0;
        font-family: Lato, "sans-serif";
        font-size: 20px;
        font-weight: 300;
        color: #661;

        @media screen and (max-width: 1024px) {
          font-size: 18px;
        }
      }
      p {
        font-size: 18px;
        line-height: 1.6;

        @media screen and (max-width: 1024px) {
          font-size: 16px;
        }
      }

      .image {
        height: 200px;
        width: auto;
        margin: auto 0;
        box-shadow: 1px 1px 4px rgba(0, 0, 50, 0.25);

        @media screen and (max-width: 1024px) {
          height: 100px;
          width: 100%;
          object-fit: cover;
          object-position: 0 0;
          mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0.7) 100%);
        }
      }
      .text {
        @media screen and (max-width: 1024px) {
          margin: 20px 50px 50px;
        }
      }

      &:nth-child(2n) {
        margin: 25px 0 25px calc(~"(100vw - 1024px) / 2");

        @media screen and (max-width: 1024px) {
          margin: 25px 0 25px 25px;
        }

        .image {
          @media screen and (max-width: 1024px) {
            order: -1;
          }
        }
        .text {
          margin-right: 50px;

          @media screen and (max-width: 1024px) {
            margin-right: 50px;
          }
        }
      }
      &:nth-child(2n-1) {
        margin: 25px calc(~"(100vw - 1024px) / 2") 25px 0;

        @media screen and (max-width: 1024px) {
          margin: 25px 25px 25px 0;
        }

        .image {
          order: -1;
        }
        .text {
          margin-left: 50px;

          @media screen and (max-width: 1024px) {
            margin-left: 50px;
          }
        }
      }
    }
  }
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
  }
}
</script>
