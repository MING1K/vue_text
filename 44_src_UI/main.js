import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
import { Button,Row,DatePicker } from 'element-ui';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)
Vue.component(Button.name, Button); //Button.name可自己修改，修改后将el-name改为自己修改的name
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

/* 或写为
 * Vue.use(Button)
 */
new Vue({
  el:'#app',
  render:h => h(App),
})