import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'lineChart.01',
    path: '/lineChart/01',
    component: () => import(/* webpackChunkName: "home" */ '@/views/line/LineChart01.vue'),
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