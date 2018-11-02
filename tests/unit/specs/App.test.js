import Vuex, { Store } from 'vuex';
import VueRouter from 'vue-router';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

import app from '@/App';
import features from '@/components/features';
import reasoning from '@/components/reasoning';
import mutations from '@/store/mutations';

describe('App.vue', () => {
  let store;
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);

    store = new Store({
      state: {
        greeting: 'Hi'
      },
      mutations
    });

    router = new VueRouter({
      routes: [
        {
          path: '*',
          redirect: 'reasoning'
        },
        {
          path: '/features',
          name: 'features',
          component: features
        },
        {
          path: '/reasoning',
          name: 'reasoning',
          component: reasoning
        }
      ]
    });
  });

  describe('Creation', () => {
    test('Render correct contents', () => {
      const wrapper = mount(app, {
        store,
        localVue,
        router
      });

      expect(wrapper.find({ ref: 'testApp' }).html())
        .toMatchSnapshot();
    });
  });

  describe('Vuex store', () => {
    test('Modifying the greeting', () => {
      const wrapper = shallowMount(app, {
        store,
        localVue,
        router
      });

      wrapper.vm.$store.commit('changeGreeting', 'Test');

      expect(wrapper.find({ ref: 'testGreeting' }).text())
        .toEqual('Test World');
    });
  });

  describe('Interactions', () => {
    test('Open Dev Tools', () => {
      const wrapper = shallowMount(app, {
        store,
        localVue,
        router
      });

      global.nw = {
        Window: {
          get: jest.fn(() => {
            return {
              showDevTools: jest.fn()
            };
          })
        }
      };

      let devToolsLink = wrapper.find({ ref: 'testShowDevTools' });
      devToolsLink.trigger('click');

      expect(nw.Window.get())
        .toHaveBeenCalled();
    });
  });
});
