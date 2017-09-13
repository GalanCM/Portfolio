import Vue from 'vue';
import Index from './index.vue';

document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: '#app',
    render: h => h(Index)
  });
});
