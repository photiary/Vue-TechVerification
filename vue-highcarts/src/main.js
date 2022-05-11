import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/index'
import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false

Vue.use(HighchartsVue)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
