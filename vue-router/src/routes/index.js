import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ '@/views/MainPage.vue'),
  },
  {
    name: 'direct',
    path: '/direct',
    component: () => import(/* webpackChunkName: "main" */ '@/views/direct/DirectPage.vue'),
  },
  {
    name: 'import',
    path: '/import',
    component: () => import(/* webpackChunkName: "main" */ '@/views/import/ImportPage.vue'),
  },
  {
    name: 'component',
    path: '/component',
    component: () => import(/* webpackChunkName: "main" */ '@/views/component/ComponentPage.vue'),
  },
  {
    name: 'route',
    path: '/route',
    component: () => import(/* webpackChunkName: "main" */ '@/views/route/RoutePage.vue'),
    children: [
      {
        name: 'red',
        path: 'red',
        components: { red: () => import(/* webpackChunkName: "main" */ '@/components/Red.vue'), },
      },
      {
        name: 'yellow',
        path: 'yellow',
        components: { yellow: () => import(/* webpackChunkName: "main" */ '@/components/Yellow.vue'), },
      },
    ],
  },
];

let allRoutes = [];
allRoutes = allRoutes.concat(
  routes,
);

export default new VueRouter({
  mode: 'history',
  routes: allRoutes,
});