import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Meta from "vue-meta";

Vue.use(Meta);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.assert(
    to.path === "/" || to.meta.title !== undefined,
    "Page must have title."
  ); // make sure the page has a title

  const title = to.path === "/" ? "Home" : to.meta.title;
  document.title = "Galan Montgomery | " + title;

  next();
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
