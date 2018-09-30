import Vue from "vue";
import Router from "vue-router";
import Portfolio from "./views/Portfolio.vue";
import About from "./views/About.vue";
import PortfolioStudy from "./views/CaseStudies/PortfolioStudy.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      meta: { title: "Portfolio" }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { title: "About" }
    },
    {
      path: "/case_studies/portfolio",
      name: "portfolio_study",
      component: PortfolioStudy,
      meta: { title: "Case Study – My Portfolio" }
    }
  ]
});
