<template>
  <CaseStudy :studyName=" 'This Portfolio' ">
    <div slot='tech-case' class="case">
      <p class="mission">
        As a showcase for my development skills, <em>This Site</em> needs to be a lean, easy to iterate platform, where I can learn new technology. And it needs to show off a bit.
      </p>

      <section class="question">
        <div class="text">
          <h1 class="header-short">
            A Lean, Easy to Iterate Platform
          </h1>
          <h2 class="header-long">
            This small site doesn't need a huge framework like Angular: it needs one that is easy to work with, and can grow as needed.
          </h2>
          <p>
            At the risk of sounding like a salesman: using Vue was the easiest decision I made on this project. It was already the framework that I had the most experience with, it's small and fast, and the way it structures code just makes sense.
          </p>
          <p>
            Using the new <em>vue-cli</em>, I can also add new modules as needed. I started with only the core Vue framework, and have started adding other pieces of the ecosystem as needed.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/vue.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">
            New Technology
          </h1>
          <h2 class="header-long">
            I've toyed with a number of new tools and techniques while working on this site, but one stands out.
          </h2>
          <p>
            <strong>Typescript.</strong>
          </p>
          <p>
            I've been excited about the idea of gradual typing since I first encountered MyPy years ago. The idea of being able to explore the code with the flexibility of dynamic typing, while still having access to the compile-time type safety of a compilied language is enticing.
          </p>
          <p>
            <em>Typescript</em> is a relatively light wrapper around the ES6+ code that I'm already writing. Still more than I would want to add to a small, one-time project, but for anything longer-term, I expect to use it quite a bit in the future.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/typescript.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">
            Showing Off.
          </h1>
          <h2 class="header-long">
            Web animation has come a long way in the last few years.
          </h2>
          <p>
            For simple animations, Vue's component transitions – coupled with some CSS – can produce some very impressive results.
          </p>
          <p>
            More complex animations, like the site's intro, require the addition of something a bit heavier. In this case, I grabbed <a href="https://github.com/jeremyckahn/shifty">Shifty</a>, a small animation library built around chainable promises. The code is still a bit messy though, and I'm hoping to get a chance to look into <a href="https://popmotion.io/">Popmotion</a> Pose in the near future.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/animation.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">
            Room for Improvement.
          </h1>
          <h2 class="header-long">
            I may have iterated on this one <em>too</em> quickly.
          </h2>
          <p>
            One of my initial goals on this site was to not only use it as a showcase, but as a code sample. You can actually check out the code <a href="https://github.com/GalanCM/Portfolio">on Github</a> if you want. It's a bit of a mess though. I wanted to get this site ready to show to prospective employers quickly, and as a result, the code has suffered.
          </p>
          <p>
            I've learned (and continue to learn) a number of tricks to help with this in the future: best practices to keep code organized from day one. But for now, there is a lot that needs to be refactored – from animation code to CSS to HTML structure.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/bad_code.png') " class="image">
      </section>
    </div>

    <div slot='design-case' class="case">
      <h1 class="header-short">Design case</h1>
        <p>
          Sed pretium semper mattis. Suspendisse dapibus arcu volutpat viverra vehicula. Praesent ac tincidunt risus, vitae congue mauris. Maecenas varius velit ac mi consequat cursus. Duis molestie, arcu eget blandit sollicitudin, mi turpis mattis eros, vitae vulputate massa nulla at sapien. Mauris sodales quis metus vitae venenatis. Maecenas congue eu dolor convallis laoreet. Suspendisse ante nulla, feugiat et faucibus vel, dictum nec nunc. Cras rutrum purus vel dictum hendrerit. Nunc eget mi aliquam, dictum sapien nec, mollis urna. Pellentesque quis pharetra sapien.
        </p>
        <p>
          Integer auctor purus dolor, vel scelerisque est iaculis a. Pellentesque facilisis mauris non consectetur suscipit. Nulla ornare urna in ultrices lobortis. Mauris a blandit arcu, in pretium enim. Cras mollis pretium lorem, quis malesuada ipsum faucibus et. Fusce blandit erat sed enim euismod lobortis. Ut et cursus est. 
        </p>
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
