const routes = [
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/MainPage.vue'),
    children: [

    ],
  },
  {
    name: 'registryItem',
    path: '/registryItem',
    component: () => import(/* webpackChunkName: "main" */ '@/views/RegistryItemPage.vue'),
    children: [

    ],
  },
  {
    name: 'itemInfo',
    path: '/itemInfo',
    component: () => import(/* webpackChunkName: "main" */ '@/views/ItemInfoPage.vue'),
    children: [

    ],
  },
  {
    name: 'userInfo',
    path: '/userInfo',
    component: () => import(/* webpackChunkName: "main" */ '@/views/UserInfoPage.vue'),
    children: [

    ],
  },
];

export default routes;