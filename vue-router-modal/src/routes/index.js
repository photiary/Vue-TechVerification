import Vue from 'vue'
import VueRouter from 'vue-router'
import mainRouter from './mainRouter'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
];

let allRoutes = [];
allRoutes = allRoutes.concat(
  routes,
  mainRouter,
);

export default new VueRouter({
  mode: 'history',
  routes: allRoutes,
});