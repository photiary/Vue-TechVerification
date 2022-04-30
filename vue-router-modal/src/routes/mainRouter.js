const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main-page" */ '@/views/MainPage.vue'),
    children: [
      {
        name: 'content',
        path: 'content',
        component: () => import(/* webpackChunkName: "Content-page" */ '@/views/ContentPage.vue'),
      },
    ],
  },
];

export default routes;