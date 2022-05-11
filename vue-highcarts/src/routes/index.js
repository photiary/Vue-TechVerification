import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'lineChart',
    path: '/lineChart',
    component: () => import(/* webpackChunkName: "chart" */ '@/views/LineChart.vue'),
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