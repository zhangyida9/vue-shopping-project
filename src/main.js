import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './network/request'

//按需导入vant
import './vant'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
