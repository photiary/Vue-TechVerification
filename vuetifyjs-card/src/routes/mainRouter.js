const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main-page" */ '@/views/MainPage.vue'),
    children: [
      {
        name: 'main.filter',
        path: 'filter',
        component: () => import(/* webpackChunkName: "filter-page" */ '@/views/FilterPage.vue'),
      },
    ],
  },
];

export default routes;