<template>
  <div class="about">
    <h1>Do you want a <em>robust</em>, <strong>distinctive</strong> website that will get you noticed?</h1>
    <h1>Do you want <em>stylish visuals</em> that engage your users and support their needs?</h1>
    <h1>Do you want <strong>UX principles</strong> to guide both your <em>product design</em> and your <em>code</em>?</h1>
    <h2>My name is <span class="name">Galan Montgomery</span>. <em>I engineer websites</em> with a focus on usability.</h2>
    <h2>And <strong>I could join your team.</strong></h2>
  </div>
</template>

<style lang="less" scoped>
  .about {
    margin-top: 50px;
    background-color: #000a14;
    max-width: 100%;
    padding: 50px 100px;

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      margin-top: 99px;
      padding: 50px 50px;
    }
  }

  h1 {
    font-size: 22px;
    font-family: Raleway, sans-serif;
    font-weight: 200;
    color: rgba(255,255,255,0.7);

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      font-size: 40px;
    }
  }
  h1:nth-of-type(2) {
    text-align: right;
  }
  h1:not(:first-of-type) {
    margin-top: 50px;
  }
  h1:first-of-type {
    margin-top: 0;
  }
  h1:not(:last-of-type) {
    margin-bottom: 50px;
  }
  h1:last-of-type {
    margin-bottom: 0;
  }
  h1 em {
    color: rgba(255,255,255,1.0);
    text-decoration: underline rgba(129, 10, 9, 1);
    font-size: 24px;

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      font-size: 44px;
    }
  }
  h1 strong {
    opacity: 1;
    font-size: 30px;
    font-weight: 400;
    color: rgba(255,255,255,1.0);

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      font-size: 50px;
    }
  }

  h2 {
    font-size: 28px;
    font-family: Lato;
    font-weight: 200;
    font-style: normal;
    text-align: center;
    margin-bottom: 0;
    color: rgba(255,255,255,0.55);

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      font-size: 56px;
    }
  }
  h2:first-of-type {
    margin-top: 70px;
  }
  h2 em {
    font-style: normal;
    color: rgba(255,255,255,0.9);
    font-style: italic;
    text-decoration: underline rgba(129, 10, 9, 1);
  }
  .name {
    font-weight: 400;
    font-size: 42px;
    color: rgba(255,255,255,1.0);
    white-space: nowrap;

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      font-size: 72px;
    }
  }
  h2 strong {
    font-weight: 400;
    font-size: 30px;
    color: rgba(255,255,255,1.0);

    @media ( max-width: 1024px ) and ( orientation: portrait ) {
      font-size: 60px;
    }
  }
</style>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component({})
  export default class Index extends Vue {
    @Prop(Boolean)
    nav_position: number;

    created(): void {
      window.addEventListener("scroll", () => {
        let bottom = this.$el.getBoundingClientRect().bottom;
        if (bottom < 0) {
          this.$emit('input', bottom + window.scrollY);
        }
        else {
          this.$emit('input', 0);
        }
      });
    }
  }
</script>