const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main-page" */ '@/views/MainPage.vue'),
    children: [
      {
        name: 'main.filter',
        path: 'filter',
        components: {
          Filter: () => import(/* webpackChunkName: "filter-page" */ '@/views/FilterPage.vue'),
        }
      },
      {
        name: 'main.registryCard',
        path: 'registryCard',
        components: {
          RegistryCard: () => import(/* webpackChunkName: "registry-card" */ '@/views/RegistryCardPage.vue'),
        }
      },
    ],
  },
];

export default routes;