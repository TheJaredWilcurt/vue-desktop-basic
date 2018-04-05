<template>
  <section>
    <h2>ES6 Restrictions:</h2>
    <ul>
      <li>You may only use the parts of ES6+ that are already supported in Chromium <strong>{{ chromiumVersion }}</strong> or Node <strong>{{ nodeVersion }}</strong>.</li>
      <li>You may use parts of ES6+ not supported in this version of Chromium/Node, but you will need to supply polyfills, or transpile to ES5.</li>
    </ul>

    <h2>.Vue file restrictions</h2>
    <p>This boilerplate does not use a bundler, which means there are some restrictions around how you should write your code.</p>
    <ul>
      <li>Usage of <code>.vue</code> files is allowed with the help of "http-vue-loader". However, this means your <code>.vue</code> files run directly in the browser.</li>
      <li>No usage of meta-languages (Sass/HAML/Pug/scss/etc) is allowed in <code>.vue</code> files, because <code>.vue</code> files are ran in the browser and the browser doesn't understand meta-languages.</li>
      <li>
        You can import any Node module and use it in your code, however when requiring them inside <code>.vue</code> files, you have to use <code>nw.require</code>.
        <ul>
          <li><code>var path = nw.require('path');</code></li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
  module.exports = {
    name: 'restrictions',
    computed: {
      chromiumVersion: function () {
        return nw.process.versions.chromium;
      },
      nodeVersion: function () {
        return nw.process.versions.node;
      }
    }
  };
</script>
