import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"

//引入组件Exam01.vue
//1.将Exam01.vue引入当前router.js
import Exam01 from "./components/exam_dayong/Exam01.vue"
import Exam02 from "./components/exam_dayong/Exam02"
import Exam03 from "./components/exam_dayong/Exam03"
import Exam04 from "./components/exam_dayong/Exam04"

Vue.use(Router)
export default new Router({
  //2.为组件指定访问路径,path指定组件路径，components指定组件名称
  routes: [
    {path:'/Exam04',component:Exam04},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam01',component:Exam01},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
