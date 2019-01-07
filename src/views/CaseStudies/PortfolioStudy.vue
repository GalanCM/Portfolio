<template>
  <CaseStudy :studyName=" 'This Portfolio' ">
    <div slot="tech-case" class="case">
      <p
        class="mission"
      >As a showcase for my development skills, this site needs to be a lean, easy to iterate platform, where I can learn new technology. And it needs to show off a bit.</p>

      <section class="question">
        <div class="text">
          <h1 class="header-short">A Lean, Easy to Iterate Platform</h1>
          <h2
            class="header-long"
          >This small site doesn't need a huge framework like Angular: it needs one that is easy to work with, and can grow as needed.</h2>
          <p>At the risk of sounding like a salesman: using Vue was the easiest decision I made on this project. It was already the framework that I had the most experience with, it's small and fast, and the way it structures code just makes sense.</p>
          <p>
            Using the new
            <em>vue-cli</em>, I can also add new modules as needed. I started with only the core Vue framework, and have started adding other pieces of the ecosystem as needed.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/vue.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">New Technology</h1>
          <h2
            class="header-long"
          >I've toyed with a number of new tools and techniques while working on this site, but one stands out.</h2>
          <p>
            <strong>Typescript.</strong>
          </p>
          <p>I've been excited about the idea of gradual typing since I first encountered MyPy years ago. The idea of being able to explore the code with the flexibility of dynamic typing, while still having access to the compile-time type safety of a compilied language is enticing.</p>
          <p>
            <em>Typescript</em> is a relatively light wrapper around the ES6+ code that I'm already writing. Still more than I would want to add to a small, one-time project, but for anything longer-term, I expect to use it quite a bit in the future.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/typescript.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">Showing Off.</h1>
          <h2 class="header-long">Web animation has come a long way in the last few years.</h2>
          <p>For simple animations, Vue's component transitions – coupled with some CSS – can produce some very impressive results.</p>
          <p>
            More complex animations, like the site's intro, require the addition of something a bit heavier. In this case, I grabbed
            <a
              href="https://github.com/jeremyckahn/shifty"
            >Shifty</a>, a small animation library built around chainable promises. The code is still a bit messy though, and I'm hoping to get a chance to look into
            <a
              href="https://popmotion.io/"
            >Popmotion</a> Pose in the near future.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/animation.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">Room for Improvement.</h1>
          <h2 class="header-long">
            I may have iterated on this one
            <em>too</em> quickly.
          </h2>
          <p>
            One of my initial goals on this site was to not only use it as a showcase, but as a code sample. You can actually check out the code
            <a
              href="https://github.com/GalanCM/Portfolio"
            >on Github</a> if you want. It's a bit of a mess though. I wanted to get this site ready to show to prospective employers quickly, and as a result, the code has suffered.
          </p>
          <p>I've learned (and continue to learn) a number of tricks to help with this in the future: best practices to keep code organized from day one. But for now, there is a lot that needs to be refactored – from animation code to CSS to HTML structure.</p>
        </div>
        <img :src=" require('../../assets/study-portfolio/bad_code.png') " class="image">
      </section>
    </div>

    <div slot="design-case" class="case">
      <p
        class="mission"
      >This site is for potential clients or employers to learn more about me. They are likely to be in a hurry, and will want to quickly vet my skills. If they like what they see, only then will they want to dig deeper.</p>

      <section class="question">
        <div class="text">
          <h1 class="header-short">Catching Attention</h1>
          <h2
            class="header-long"
          >I need to get a visitor's attention quickly, and the intro animation is meant to do just that.</h2>
          <p>Normally I'm not a fan of flashy intros. They tend to get in the way of users doing what they came to the site to do. But you came here to learn about me and my skills, and UI animation is a skill that I'm quite proud of.</p>
          <p>I do try to keep it snappy, and it only plays on the first visit: if a visitor comes back a second time, I don't want to waste their time.</p>
        </div>
        <img :src=" require('../../assets/study-portfolio/intro_animation.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">Who am I?</h1>
          <h2 class="header-long">What skills do I bring to the table.?</h2>
          <p>The first thing on my site, after the animation, is a brief overview of my skill. I've tried to keep this brief and to the point, highlighting the skills that I'm most proud of, and the kind of work that I want to do.</p>
          <p>I certainly could have been more wordy here, but I figure that visitors to the main page are in a hurry and just want to get a quick feel for who I am. If I've promoted myself correctly, they can always dig further.</p>
        </div>
        <img :src=" require('../../assets/study-portfolio/overview.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">Style</h1>
          <h2 class="header-long">Finding a Brand for Myself.</h2>
          <p>Figuring out a brand for myself has been a slow process. When I started builing this site, all I knew was that I wanted a professional, approachable look, and that it needed some color.</p>
          <p>
            Choosing fonts was easy. I knew that I wanted a fun, but sharp, header font – and
            <a
              href="https://fonts.google.com/specimen/Poppins"
            >Poppins</a> fit the bill. I matched that with
            <a href="https://fonts.google.com/specimen/Lato">Lato</a>, a great body font with similar letterforms.
          </p>
          <p>
            How to work in color was a bit more complicated. After iterating over the design a few times, I came to the current
            <a
              href="https://www.google.com/search?q=mondrian&source=lnms&tbm=isch&sa=X&ved=0ahUKEwil993-tvbaAhXBUt8KHUZlA7MQ_AUICigB"
            >Mondrian</a>-inspired design, with colors borrowed from each project in the portfolio. The result is intended to be a contemporary take on mid-century modern designs.
          </p>
        </div>
        <img :src=" require('../../assets/study-portfolio/mondrian.png') " class="image">
      </section>

      <section class="question">
        <div class="text">
          <h1 class="header-short">Adding Case Studies</h1>
          <h2 class="header-long">Improvements to Readablility.</h2>
          <p>In the previous iteration of this site, I described each site in detail on the main page, but I've since realized that users first coming to the site probably aren't interested in learning about my work in so much detail. They are curious as to who I am, and those paragraphs quickly become walls of text.</p>
          <p>
            Conversely, for people who
            <em>are</em> interested in those details, it's too short. There was no room on the main page to meaningfully go into my process or skills.
          </p>
          <p>These case studies where the solution. The main page now has a brief sentence about why each project is in my portfolio, and the case studies now have room to breathe.</p>
        </div>
        <img :src=" require('../../assets/study-portfolio/wall_of_text.png') " class="image">
      </section>
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
