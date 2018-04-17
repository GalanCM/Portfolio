import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import PortfolioStudy from "./views/CaseStudies/PortfolioStudy.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      meta: { title: "Portfolio" }
    },
    {
      path: "/caseStudy/portfolio",
      name: "portfolio_study",
      component: PortfolioStudy,
      meta: { title: "Case Study – My Portfolio" }
    }
  ]
});
