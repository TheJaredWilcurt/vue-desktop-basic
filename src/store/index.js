// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  state: {
    greeting: 'Hello'
  },
  getters: {},
  mutations: {
    changeGreeting: function (state, newGreeting) {
      state.greeting = newGreeting;
    }
  },
  actions: {}
});

