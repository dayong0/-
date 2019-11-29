import Vue from 'vue'
import App from './App.vue'
import router from './router'

//删除第5-16行的内容
//import'mint-ui/lib/style.css'
//Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
//import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
//import './lib/mui/css/icons-extra.css'

//大用手动代码部分
//引入字体图标对应的css文件
import "./font_dayong/iconfont.css"

//1.完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//2.单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//3.将mint-ui注册vue实例
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
