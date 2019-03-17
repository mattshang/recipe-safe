import Vue from 'vue'
import './custom.scss'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
