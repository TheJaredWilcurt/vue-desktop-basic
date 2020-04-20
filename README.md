
# vue-desktop-basic boilerplate


## What is this

This is a boilerplate for a simple desktop app. It comes with tips about common tasks for a desktop app.


## Should I use this

Probably not? It's more of a proof of concept to see if you can run all of the features of a Vue app without the need for a bundler, since the process of bundling is pretty pointless for a desktop app (no point in shaving off 25KB when you are shipping 100MB).

Still though, there are a lot of good tips for NW.js apps in there in general, that are applicable to any desktop app, whether it is using Vue & NW.js or React & Electron.


## What should I use instead?

`NW-Vue-CLI-Example` is basically a normal Vue-CLI project with some additional setup already added in to work as a desktop app.

* https://github.com/nwutils/nw-vue-cli-example


### Features

The following are already set up:

* Vue.js
* Vue-Router
* Vuex
* Vue-DevTools
* Sass
* Sasslint
* ESLint
* nwjs-builder-phoenix
* [VSCode intellisense for nw](http://docs.nwjs.io/en/latest/For%20Users/FAQ/)


## Usage

1. Download and install [Node.js](https://nodejs.org)
1. Download `vue-desktop-basic`
1. Run `npm install`
1. Run `npm start`


## Linting

1. `npm run lint` will lint your `.js` and `.vue` files according to the rules in `.eslintrc.js`
1. `npm run fix` this will auto-fix any linting issues that `npm run lint` finds (not everything can be auto fixed)
1. `npm run sass` will start watching for changes in the sass folder and process the changes to the css folder.
1. `npm run sasslint` will lint your `.sass` and `.scss` files.
1. `npm run sassfix` will attempt to auto-fix Sass linting issues, however it may take several runs and not everything can be auto fixed


## To do a build:

1. `npm install`
1. `npm run build`

All settings regarding the build are handled in the `package.json`.


### Vue-DevTools

If you want Vue-DevTools to be accessible in the Chromium DevTools in your app, you cannot use the minified version of Vue.js (use `vue.js` not `vue.min.js`).


* * *

All other instructions and details are inside the app.

* * *

### TO DO List:

* Add in Vue-Test-Utils
