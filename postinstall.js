let fs = require('fs');
let exec = require('child_process').execSync;
let originalDir = process.cwd() + '';

let postInstall = {
  runner: function (args) {
    try {
      let runner = exec(args);

      let output = runner.toString().trim();
      if (output) {
        // console.log(output);
      }
    } catch (err) {
      console.log(err);
    }
  },
  gitClone: function () {
    console.log('Downloading Vue-DevTools source code');
    let executable = 'git clone --quiet';
    let url = 'https://github.com/vuejs/vue-devtools.git';
    let branch = '-b master';
    let destination = 'vue-devtools';

    let args = [
      executable,
      url,
      branch,
      destination
    ].join(' ').trim();

    this.runner(args);
  },
  npmInstallDevTools: function () {
    console.log('Installing Vue-DevTools dependencies');

    process.chdir('./vue-devtools');

    this.runner('npm install');

    process.chdir(originalDir);
  },
  buildDevTools: function () {
    console.log('Building Vue-DevTools');

    process.chdir('./vue-devtools');

    this.runner('npm run build');

    process.chdir(originalDir);
  },
  relocateDevTools: function () {
    console.log('Installing Vue-DevTools in NW.js');
    try {
      fs.renameSync('./vue-devtools', './node_modules/vue-devtools');
    } catch (err) {
      console.log(err);
    }
  },
  runEverything: function () {
    // If we've already ran this once, we don't need to re-run it on every `npm install`
    if (fs.existsSync('node_modules') && fs.existsSync('node_modules/vue-devtools')) {
      return;
    }
    this.gitClone();
    this.npmInstallDevTools();
    this.buildDevTools();
    this.relocateDevTools();
  }
};

postInstall.runEverything();
