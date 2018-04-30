import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
// import IPChecker from './IPChecker.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueWidgets from 'vue-widgets'
// import 'vue-widgets/dist/styles/vue-widgets.css'

export const eventBus = new Vue()

Vue.use(VueWidgets)
Vue.use(VueRouter)
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
