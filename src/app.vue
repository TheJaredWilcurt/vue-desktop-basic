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
body {
  font-family: "Century Gothic", "Trebuchet MS", Tahoma, sans-serif;
}

h2 {
  border-top: 3px solid #000;
  padding-top: 1.2em;
}

nav a {
  display: inline-block;
  padding: 0px 10px;
  text-transform: capitalize;
}

li {
  padding-top: 7px;
  line-height: 1.5;
}

h2 + ul > li:first-of-type {
  padding-top: 0px;
}

code {
  background: #EDEDED;
  font-size: 15px;
}

.router-link-active {
  border: 1px solid #00F;
  border-radius: 50px;
  padding: 1px 9px 3px;
}
</style>
