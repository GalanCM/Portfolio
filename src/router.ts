import Vue from "vue";
import Router from "vue-router";

const Portfolio = () => import(/* webpackPrefetch: true */ "./views/Portfolio.vue")
const CodeSamples = () => import(/* webpackPrefetch: true */ "./views/CodeSamples.vue")
const About = () => import(/* webpackPrefetch: true */ "./views/About.vue")
const PortfolioStudy = () => import("./views/CaseStudies/PortfolioStudy.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      meta: { title: "Portfolio" },
      children: [
        {
          path: "/case_studies/portfolio",
          name: "portfolio_study",
          component: PortfolioStudy,
          meta: { title: "Case Study – My Portfolio" }
        }
      ]
    },
    {
      path: "/code-samples",
      name: "code-samples",
      component: CodeSamples,
      meta: { title: "CodeSamples" }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { title: "About" }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
