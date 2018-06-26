<template>
  <section>
    <h2>Features:</h2>
    <p><em>vue-desktop-basic</em> comes with:</p>
    <ul>
      <li v-for="(feature, index) in features" :key="index">
        <a href="#" @click.prevent="openInDefaultBrowser(feature.url)">{{ feature.name }}</a>
        <small v-if="feature.version">
          (v{{ feature.version }})
        </small>
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
          name: 'NW.js',
          version: nw.process.versions.nw,
          url: 'https://nwjs.io'
        },
        {
          name: 'NW.js Builder (Phoenix)',
          version: JSON.parse(nw.require('fs').readFileSync('./node_modules/nwjs-builder-phoenix/package.json').toString()).version,
          url: 'https://github.com/evshiron/nwjs-builder-phoenix'
        },
        {
          name: 'Vue.js',
          version: Vue.version,
          url: 'https://vuejs.org'
        },
        {
          name: 'Vue-Router',
          version: VueRouter.version,
          url: 'https://router.vuejs.org/en/'
        },
        {
          name: 'Vuex',
          version: Vuex.version,
          url: 'https://vuex.vuejs.org/en'
        },
        {
          name: 'HTTP-Vue-Loader',
          version: JSON.parse(nw.require('fs').readFileSync('./node_modules/http-vue-loader/package.json').toString()).version,
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

