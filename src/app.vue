<template>
  <div id="app">

    <!-- example of getting data from the Vuex State -->
    <h1>{{ greeting }} World</h1>

    <!-- Vue Router  -->
    <nav>
      <router-link
        v-for="(route, index) in router.options.routes"
        v-if="route.component"
        :to="route.path"
        :key="index"
      >
        {{ route.name }}
      </router-link>
      |
      <a href="#" @click.prevent="openDevTools">Open Dev Tools</a>
    </nav>

    <router-view />

  </div>
</template>

<script>
module.exports = {
  name: 'app',
  data: function () {
    return {};
  },
  methods: {
    openDevTools: function () {
      nw.Window.get().showDevTools();
    }
  },
  computed: {
    greeting: function () {
      return this.$store.state.greeting;
    }
  }
};
</script>

<style>
.router-link-active {
  border: 1px solid #00F;
  border-radius: 50px;
  padding: 1px 9px 3px;
}
</style>
