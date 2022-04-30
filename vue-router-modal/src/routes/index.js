import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
  },
];

let allRoutes = [];
allRoutes = allRoutes.concat(
  routes
);

export default new VueRouter({
  mode: 'history',
  allRoutes,
});