import Vue from 'vue'
import App from './App.vue'

import {hunhe,hunhe2} from './mixin'
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

// 关闭Vue的生产提示
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render:h => h(App)
})