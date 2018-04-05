<template>
  <section>
    <h2>Features:</h2>
    <p><em>vue-desktop-basic</em> comes with:</p>
    <ul>
      <li v-for="feature in features">
        <a href="#" @click.prevent="openInDefaultBrowser(feature.url)">{{ feature.name }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
  module.exports = {
    name: 'features',
    data: function () {
      return {
        features: [
          {
            name: 'NW.js (v' + nw.process.versions.nw + ')',
            url: 'https://nwjs.io'
          },
          {
            name: 'NW.js Builder (Phoenix)',
            url: 'https://github.com/evshiron/nwjs-builder-phoenix'
          },
          {
            name: 'Vue.js',
            url: 'https://vuejs.org'
          },
          {
            name: 'Vue-Router',
            url: 'https://router.vuejs.org/en/'
          },
          {
            name: 'Vuex',
            url: 'https://vuex.vuejs.org/en'
          },
          {
            name: 'HTTP-Vue-Loader',
            url: 'https://github.com/FranckFreiburger/http-vue-loader'
          }
        ]
      };
    },
    methods: {
      // Since your app is running in Chromium,
      // links to websites will navigate away from your app,
      // so you need to open them in the user's default browser
      openInDefaultBrowser: function (url) {
        nw.Shell.openExternal(url);
      }
    }
  };
</script>

