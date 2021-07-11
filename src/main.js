import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/tailwind.css"
import {Chart} from 'chart.js'
import Chartik from 'vue-chartkick'
import {VueSpinners} from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'


Vue.use(Chartik.use(Chart))
Vue.use(VueSpinners)
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
