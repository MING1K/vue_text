import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

/* 
// 法一
const Demo = Vue.extend({})
const d = new Demo()

Vue.prototype.x = d // d为vc */

new Vue({
  el:'#app',
  render:h => h(App),
  beforeCreate(){ // 常用
    Vue.prototype.$bus = this // 安装全局事件总线
  },
})