import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
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