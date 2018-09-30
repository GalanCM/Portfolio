<template>
  <div class="about">
    <transition name="scale">
      <h1>Do you want a <strong>distinctive</strong> website built on a <em>robust</em> foundation?</h1>
    </transition>
    <h1>Do you want <em>stylish visuals</em> that engage your users and support their needs?</h1>
    <h1>Do you a care about both <strong>user</strong> and <strong>developer</strong>&nbsp;<em>experience</em>?</h1>
    <h2>My name is <span class="name">Galan Montgomery</span>. <em>I engineer websites</em> with a focus on usability.</h2>
    <h2>And <strong>I could work for you.</strong></h2>
  </div>
</template>

<style lang="less" scoped>
.about {
  width: 100vw;
  min-height: 100vh;
  padding: 50px 80px;
  background-color: #000a14;

  @media (max-width: 1024px) and (orientation: portrait) {
    padding: 35px 35px;
  }
}

h1 {
  font-size: 22px;
  font-family: Raleway, sans-serif;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.7);
  transform-origin: top center;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 18px;
  }
}
h1:nth-of-type(2) {
  text-align: right;
}
h1:not(:first-of-type) {
  margin-top: 40px;
}
h1:first-of-type {
  margin-top: 0;
}
h1:not(:last-of-type) {
  margin-bottom: 30px;
}
h1:last-of-type {
  margin-bottom: 0;
}
h1 em {
  color: rgba(255, 255, 255, 1);
  text-decoration: underline rgba(129, 10, 9, 1);
  font-size: 24px;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 20px;
  }
}
h1 strong {
  opacity: 1;
  font-size: 30px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 23px;
  }
}

h2 {
  font-size: 28px;
  font-family: Lato;
  font-weight: 200;
  font-style: normal;
  text-align: center;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.55);

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 25px;
  }
}
h2:first-of-type {
  margin: 50px 0;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 25px;
  }
}
h2 em {
  font-style: normal;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  text-decoration: underline rgba(129, 10, 9, 1);
}
.name {
  font-weight: 400;
  font-size: 42px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 34px;
  }
}
h2 strong {
  font-weight: 400;
  font-size: 30px;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 28px;
  }
}

.scale-active {
  transition: 300ms transform ease-in;
}
.scale-enter {
  transform: scaleY(0);
}
.scale-to {
  transform: scaleY(1);
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Index extends Vue {
  created(): void {
    window.addEventListener("scroll", () => {
      let bottom = this.$el.getBoundingClientRect().bottom;
      let header_buffer = window.matchMedia(
        "(max-width: 1024px) and (orientation: portrait)"
      ).matches
        ? 95
        : 50;

      if (bottom < header_buffer) {
        this.$emit("input", bottom - header_buffer + window.scrollY);
      } else {
        this.$emit("input", 0);
      }
    });
  }
}
</script>