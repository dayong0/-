import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"

//引入组件Exam01.vue
//1.将Exam01.vue引入当前router.js
import Exam01 from "./components/exam_dayong/Exam01Toast.vue"
import Exam02 from "./components/exam_dayong/Exam02MessageBox"
import Exam03 from "./components/exam_dayong/Exam03MessageBoxDemo"
import Exam04 from "./components/exam_dayong/Exam04RadioAndChecklist"
import Exam05 from "./components/exam_dayong/Exam05TagContainer.vue"
import Exam06 from "./components/exam_dayong/Exam06Tabbar"
import Exam07 from "./components/exam_dayong/Exam07-1Father.vue"
import Exam08 from "./components/exam_dayong/Exam08Canvas"
import Exam09 from "./components/exam_dayong/Exam09ECharts.vue"
import WeChatHomeDayong from "./components/weChat_dayong/Home_dayong.vue"

Vue.use(Router)
export default new Router({
  //2.为组件指定访问路径,path指定组件路径，components指定组件名称
  routes: [
    {path:'/WeChat',component:WeChatHomeDayong},
    {path:'/Exam09',component:Exam09},
    {path:'/Exam08',component:Exam08},
    {path:'/Exam07',component:Exam07},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam05',component:Exam05},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam01',component:Exam01},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
