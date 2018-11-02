let mutations = nw.require('./src/store/mutations.js');

// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
  state: {
    greeting: 'Hello'
  },
  getters: {},
  mutations,
  actions: {}
});
