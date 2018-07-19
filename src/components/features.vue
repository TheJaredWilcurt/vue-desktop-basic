<template>
  <section>
    <h2>Features:</h2>
    <p><em>vue-desktop-basic</em> comes with:</p>
    <ul>
      <li v-for="(feature, featureIndex) in features" :key="'feature' + featureIndex">
        <a href="#" @click.prevent="openInDefaultBrowser(feature.url)">{{ feature.name }}</a>
        <small v-if="feature.version">
          (v{{ feature.version }})
        </small>
        <small v-if="!feature.version && feature.packageName">
          {{ getVersionNumber(feature.packageName) }}
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
          packageName: 'nwjs-builder-phoenix',
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
          url: 'https://router.vuejs.org/en'
        },
        {
          name: 'Vuex',
          version: Vuex.version,
          url: 'https://vuex.vuejs.org/en'
        },
        {
          name: 'HTTP-Vue-Loader',
          packageName: 'http-vue-loader',
          url: 'https://github.com/FranckFreiburger/http-vue-loader'
        },
        {
          name: 'Vue-DevTools',
          packageName: 'vue-devtools',
          url: 'https://github.com/vuejs/vue-devtools'
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
    },
    // Check that the dependency exists, then read it's version number from its manifest
    getVersionNumber: function (packageName) {
      let fs = nw.require('fs');
      let manifest = '';
      let version = '';

      if (fs.existsSync('./node_modules/' + packageName + '/package.json')) {
        manifest = fs.readFileSync('./node_modules/' + packageName + '/package.json');
      } else if (packageName === 'vue-devtools' && fs.existsSync('./node_modules/nw-vue-devtools/src/vue-devtools/package.json')) {
        manifest = fs.readFileSync('./node_modules/nw-vue-devtools/src/vue-devtools/package.json');
      }
      if (manifest) {
        manifest = manifest.toString();
        manifest = JSON.parse(manifest);
        version = '(v' + manifest.version + ')';
      }
      return version;
    }
  }
};
</script>

