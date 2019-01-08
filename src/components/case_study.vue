<template>
  <div class="study-wrapper">
    <div class="header-wrapper">
      <h2 class="subheader">Case Study</h2>
      <h1 class="header">{{ studyName }}</h1>
    </div>

    <section class="main">
      <slot name="design-case"></slot>
    </section>
  </div>
</template>

<style lang="less" scoped>
@import "../base.less";

.study-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  min-height: 100vh;
  width: 100%;
  background-color: #aaaabb;
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
  .display-font-light();
  margin: 0;
  line-height: 100%;
  color: #820a0a;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) and (orientation: portrait) {
    text-align: right;
  }
}

.header {
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

.study-wrapper {
  @media screen and (max-width: 1024px) {
    font-size: 40%;
  }
}

.main {
  padding-top: 10px;
  background-color: #fafaff;
  border-top: 2px solid black;
  clip-path: polygon(0 0, 105% 0, 105% 105%, 0 105%);
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
  border-top: 2px solid black;
  flex-grow: 1;
  display: flex;

  @media screen and (max-width: 1024px) {
    padding-top: 40px;
  }
}
</style>

<style lang="less">
@import "../base.less";

.study-wrapper .main {
  .case {
    width: 100%;
    display: flex;
    flex-direction: column;

    .mission {
      .h3();
      line-height: 1.7;
      color: #346;
      margin: 30px calc(~"(100vw - 1064px) / 2") 50px
        calc(~"(100vw - 1064px) / 2");
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
        font-weight: 300;
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
        .h2();
      }
      .header-long {
        .h3();

        @media screen and (max-width: 1024px) {
          font-size: 18px;
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
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0.7) 100%
          );
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
  @Prop(String)
  studyName?: string;
}
</script>
