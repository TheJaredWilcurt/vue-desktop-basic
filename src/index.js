Vue.use(Vuex);
Vue.use(VueRouter);

var app = new Vue({
  el: '#app',
  components: {
    App: httpVueLoader('src/app.vue')
  },
  store: store,
  router: router,
  template: '<App />'
});
