import Vue from 'vue'
import App from './App.vue'
// 引入插件
import VueResource from 'vue-resource'

// 引入store
import store from './store'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)


new Vue({
  el:'#app',
  render:h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this // 安装全局事件总线
  },
})