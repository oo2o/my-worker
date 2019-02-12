import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import fetch from './api/fetch'
import myFramework from './components/framework/index'
import store from './store/index'


Vue.config.productionTip = false

Vue.prototype.$http = fetch
Vue.prototype.$store = store

Vue.use(myFramework)

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
