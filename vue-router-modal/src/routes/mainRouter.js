const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main-page" */ '@/views/MainPage.vue'),
    children: [
      {
        name: 'content',
        path: 'content',
        component: () => import(/* webpackChunkName: "content-page" */ '@/views/ContentPage.vue'),
        children: [
          {
            name: 'modal',
            path: 'modal',
            component: () => import(/* webpackChunkName: "modal-page" */ '@/views/ModalPage.vue'),
          }
        ],
      },
    ],
  },
];

export default routes;