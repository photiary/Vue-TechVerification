const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main-page" */ '@/views/MainPage.vue'),
    children: [
    ],
  },
];

export default routes;