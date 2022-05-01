const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main-page" */ '@/views/MainPage.vue'),
    children: [
      {
        name: 'main.content',
        path: 'content',
        component: () => import(/* webpackChunkName: "content-page" */ '@/views/ContentPage.vue'),
        children: [
          {
            name: 'main.content.modal',
            path: 'modal',
            component: () => import(/* webpackChunkName: "modal-page" */ '@/views/ModalPage.vue'),
            props: true,
          }
        ],
      },
    ],
  },
];

export default routes;