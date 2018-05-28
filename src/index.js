Vue.use(Vuex);
Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  template: '<App />',
  components: {
    App: httpVueLoader('src/app.vue')
  },
  store: store,
  router: router
});
