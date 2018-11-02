// https://api.github.com/repos/vuejs/vue/releases

let mockReleasesResponse = {
  DELETE: {},
  GET: {
    '/releases/tags/v2.5.0': {
      headers: {
        Date: new Date('2018-07-21T01:09:22.000Z')
      },
      data: {
        url: 'https://api.github.com/repos/vuejs/vue/releases/8104710',
        assets_url: 'https://api.github.com/repos/vuejs/vue/releases/8104710/assets',
        upload_url: 'https://uploads.github.com/repos/vuejs/vue/releases/8104710/assets{?name,label}',
        html_url: 'https://github.com/vuejs/vue/releases/tag/v2.5.0',
        id: 8104710,
        node_id: 'MDc6UmVsZWFzZTgxMDQ3MTA=',
        tag_name: 'v2.5.0',
        target_commitish: 'dev',
        name: 'v2.5.0 Level E',
        draft: false,
        author: {
          login: 'yyx990803',
          id: 499550,
          node_id: 'MDQ6VXNlcjQ5OTU1MA==',
          avatar_url: 'https://avatars1.githubusercontent.com/u/499550?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/yyx990803',
          html_url: 'https://github.com/yyx990803',
          followers_url: 'https://api.github.com/users/yyx990803/followers',
          following_url: 'https://api.github.com/users/yyx990803/following{/other_user}',
          gists_url: 'https://api.github.com/users/yyx990803/gists{/gist_id}',
          starred_url: 'https://api.github.com/users/yyx990803/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/yyx990803/subscriptions',
          organizations_url: 'https://api.github.com/users/yyx990803/orgs',
          repos_url: 'https://api.github.com/users/yyx990803/repos',
          events_url: 'https://api.github.com/users/yyx990803/events{/privacy}',
          received_events_url: 'https://api.github.com/users/yyx990803/received_events',
          type: 'User',
          site_admin: false
        },
        prerelease: false,
        created_at: '2017-10-13T03:07:14Z',
        published_at: '2017-10-13T03:08:15Z',
        assets: [],
        tarball_url: 'https://api.github.com/repos/vuejs/vue/tarball/v2.5.0',
        zipball_url: 'https://api.github.com/repos/vuejs/vue/zipball/v2.5.0',
        body: '## Features & Improvements\r\n\r\n### Error Handling and Reporting\r\n\r\n* improve error handling with new `errorCaptured` hook b3cd9bc [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#error-handling-with-errorcaptured-hook)]\r\n* improve template expression error message e38d006, closes #6771\r\n* improve option type checks b7105ae\r\n\r\n### TypeScript Declaration Improvements\r\n\r\n* further improve Vue type declarations for canonical usage (#6391) db138e2\r\n\r\n  **This change requires upgrade actions for TypeScript users using 2.4 types.** Thanks to the work by @danielrosenwasser, @HerringtonDarkholme and @ktsn. For more details, please read [this blog post](https://medium.com/the-vue-point/upcoming-typescript-changes-in-vue-2-5-e9bd7e2ecf08).\r\n\r\n### Functional Components\r\n\r\n* compiled templates for functional component support ea0d227\r\n* scoped CSS support for functional components 050bb33\r\n\r\n  These features require `vue-loader>=13.3.0`. Thanks to the work by @blake-newman.  [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#functional-component-support-in-sfcs)]\r\n\r\n### Server Side Rendering\r\n\r\n* `renderToString` now returns a Promise if no callback is passed f881dd1, closes #6160\r\n* add `shouldPrefetch` option (same signature as `shouldPreload`) 7bc899c, closes #5964\r\n* auto-remove initial state embed script if in production (#6763) 2d32b5d, closes #6761\r\n* now ships an environment-agnostic build of the server renderer in `vue-server-renderer/basic.js` c5d0fa0 [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#environment-agnostic-ssr)]\r\n\r\n### `v-model`\r\n\r\n* support dynamic `type` binding on `<input>` f3fe012\r\n* now creates non-existent properties as reactive (non-recursive) e1da0d5, closes #5932 (See [reasoning behind this change](https://github.com/vuejs/vue/issues/5932#issuecomment-334040085))\r\n\r\n### `v-on`\r\n\r\n* automatic key modifier inference 4987eeb [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#v-on-automatic-key-modifiers)]\r\n* add `.exact` event modifier (#5977) 9734e87, closes #5976 [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#v-on-exact-modifier)]\r\n\r\n### Scoped Slots\r\n\r\n* support denoting normal elements as scoped slot dae173d [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#simplified-scoped-slots-usage)]\r\n\r\n### Provide/Inject\r\n\r\n* support providing default values for injections (#6322) 88423fc [[Details](https://gist.github.com/yyx990803/9bdff05e5468a60ced06c29c39114c6b#inject-with-default-values)]\r\n\r\n### `<keep-alive>`\r\n\r\n* add `max` prop for `<keep-alive>` for limiting max number of instances cached 2cba6d4\r\n\r\n### Other Improvements\r\n\r\n* `config.ignoredElements` can now contain RegExp in addition to strings (#6769) 795b908\r\n* `data` function is now called with the vm instance as the first argument (#6760) 3a5432a\r\n* `vue-template-compiler` now ships an environment-agnostic build which can be used directly in browsers in `vue-template-compiler/browser.js` a5e5b31\r\n\r\n## Bug Fixes\r\n\r\n* **compiler:** warn when inline-template component has no children (fix #6703) (#6715) baabd6d, closes #6703 #6715\r\n* **core:** avoid observing VNodes 4459b87, closes #6610\r\n* **ref:** preserve ref on components after removing root element (#6718) 6ad44e1, closes #6632 #6641\r\n* handle errors in errorHandler 2b5c83a, closes #6714\r\n* **ssr:** fix hydration mismatch with adjacent text node from slots b080a14, closes vuejs/vue-loader#974\r\n* add slot v-bind warning (#6736) 514b90b, closes #6677\r\n* allow an object\'s Symbols to be observed (#6704) 4fd2ce8\r\n* fix scoped CSS for nested nodes in functional components 4216588\r\n* **ssr:** handle inline template compilation error dff85b2, closes #6766\r\n* perperly handle v-if on <template> scoped slot 68bdbf5, closes #6725\r\n* prevent memory leak due to circular reference in vnodes 405d8e9, closes #6759\r\n* properly render value on <progress> in IE/Edge c64f9ae, closes #6666\r\n* resolve async component default for native dynamic import 2876ed8, closes #6751\r\n* use correct namespace inside <foreignObject> as root node cf1ff5b, closes #6642\r\n* use MessageChannel for nextTick 6e41679, closes #6566 #6690\r\n* work around old Chrome bug 0f2cb09, closes #6601 \r\n\r\n## Internals\r\n\r\nWe have changed the implementation of `Vue.nextTick` to fix a few bugs (related to #6566, #6690). The change involves using a **macro task** instead of a **micro task** to defer DOM updates when inside a DOM event handler attached via `v-on`. This means any Vue updates triggered by state changes inside `v-on` handlers will be now deferred using a macro task. This may lead to changes in behavior when dealing with native DOM events.\r\n\r\nFor more details regarding micro/macro tasks, see [this blog post](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/).\r\n\r\nFor the new implementation, see [source code for nextTick](https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js).'
      }
    }
  },
  PATCH: {},
  POST: {},
  PUT: {},
};

export default mockReleasesResponse;
