import Vue from 'vue'
import VueRouter from 'vue-router'
import mainRoutes from './mainRoutes'

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: 'main',
  },
];

let allRoutes = [];
allRoutes = allRoutes.concat(
  routes,
  mainRoutes,
);

export default new VueRouter({
  mode: 'history',
  routes: allRoutes,
});