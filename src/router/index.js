var router = new VueRouter({
  routes: [
    {
      path: '*',
      redirect: 'features'
    },
    {
      path: '/features',
      name: 'features',
      component: httpVueLoader('src/components/features.vue')
    },
    {
      path: '/reasoning',
      name: 'reasoning',
      component: httpVueLoader('src/components/reasoning.vue')
    },
    {
      path: '/restrictions',
      name: 'restrictions',
      component: httpVueLoader('src/components/restrictions.vue')
    },
    {
      path: '/tips',
      name: 'tips',
      component: httpVueLoader('src/components/tips.vue')
    }
  ]
});
