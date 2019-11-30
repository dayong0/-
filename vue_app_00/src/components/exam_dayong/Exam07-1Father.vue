<template>
    <div>
        <h1>我是父组件father，我想把2300元传给我儿子</h1>
        
        <!--3.调用子组件 -->   <!-- v-bind指令绑定自定义属性，可以直接执行js表达式require，并把执行的结果（图片数据传递给子组件）-->
        <SonMine money="2300"  :imgToMySon="require('../../assets/avator.jpeg')">
        </SonMine>
    </div>
</template>
<script>
//1.引入子组件
import SonMine from "./Exam07-2Son"

export default {
    data(){
        return {
           imgPath:"../../assets/avator.jpeg"
        }
    },
    //2.注册子组件
    components:{
        "SonMine":SonMine,//给子组件起一个别名
    }
}
</script>