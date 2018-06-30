<template>
  <section>
    <h2>Tips:</h2>
    <ul>
      <li>
        A best practice is to store your user's settings as a json file in <code>nw.App.dataPath</code>. This location is specific to the currently logged in computer user, your app, and the OS. On <em>your</em> computer the path would be:
        <ul>
          <li><code>require('path').join(nw.App.dataPath, 'settings.json');</code></li>
          <li><code>{{ settingsFile }}</code></li>
        </ul>
      </li>
      <li>
        When linking to an external website, you must explicitly tell NW.js to open the user's default browser. Otherwise you will navigate away from your app to the new URL.
        <ul>
          <li><code>&lt;a href="#" @click.prevent="nw.Shell.openExternal('https://vuejs.org')">VueJS.org&lt;/a></code></li>
          <li><a href="#" @click.prevent="nw.Shell.openExternal('https://vuejs.org')">VueJS.org</a></li>
        </ul>
      </li>
      <li>You can access any part of your <code>package.json</code> via <code :title="JSON.stringify(nw.App.manifest, null, 2)">nw.App.manifest</code>.</li>
      <li>
        You can share data between windows, by using <code>nw.global</code>.
        <ul>
          {{ setGlobalValue() }}
          <li><code>nw.global.cow = 'moo';</code></li>
        </ul>
      </li>
      <li>You can create a new window using <a href="#" @click.prevent="openWindowExample"><code>nw.Window.open('file.html')</code></a></li>
      <li>
        You have access to Node's <code>process</code> via <code>nw.process</code>, which will give you things like:
        <ul>
          <li :title="nw.process.arch">     <code>nw.process.arch</code>        - Tells you if the machine is 32 or 64-bit (ia32/x64)</li>
          <li :title="nw.process.platform"> <code>nw.process.platform</code>    - Tells you the OS (win32/darwin/linux)</li>
          <li :title="nw.process.execPath"> <code>nw.process.execPath</code>    - Location of the NW.js executable that the app is running in</li>
          <li :title="nw.process.cwd()">    <code>nw.process.cwd()</code>       - Current Working Directory</li>
          <li>                              <code>nw.process.chdir('..')</code> - Change Directory</li>
        </ul>
      </li>
      <li>
        Using <code>var win = nw.Window.get();</code> you have access to many controls over the current window.
        <ul>
          <li><a href="#"><code @click.prevent="nw.Window.get().maximize()">                 win.maximize();</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().restore()">                  win.restore();</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().minimize()">                 win.minimize();</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().showDevTools()">             win.showDevTools();</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().print({autoprint: false})">  win.print({autoprint: false})</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().reload()">                   win.reload();</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().reloadIgnoringCache()">      win.reloadIgnoringCache();</code></a></li>
          <li><a href="#"><code @click.prevent="nw.Window.get().close()">                    win.close();</code></a></li>
        </ul>
      </li>
      <li>
        When handling CSS, because all code will only be ran in 1 browser (Chromium):
        <ul>
          <li>You do not need to use CSS Resets or Normalizers. Whatever CSS works for you will work for 100% of your end users because you are handing them the browser you developed on.</li>
          <li>You can remove all vendor prefixes, unless it is for a feature not yet implemented in this version of Chromium.</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
module.exports = {
  name: 'tips',
  methods: {
    setGlobalValue: function () {
      nw.global.cow = 'moo';
    },
    openWindowExample: function () {
      // You can pass in the same window options that you use in your package.json as well:
      // http://docs.nwjs.io/en/latest/References/Window/#windowopenurl-options-callback
      let options = {
        width: 500,
        height: 300
      };
      nw.Window.open('secondwindow.html', options, function (win) {
        win.on('loaded', function () {
          console.log('Second Window has opened and finished loading its DOM.');
        });
      });
    }
  },
  computed: {
    settingsFile: function () {
      let path = nw.require('path');
      let settingsFileLocation = path.join(nw.App.dataPath, 'settings.json');
      return settingsFileLocation;
    },
    nw: function () {
      return nw;
    }
  }
};
</script>
