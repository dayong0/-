<template>
    <div>
        <h1>甭管我父组件是谁，谁给发钱就给谁做儿子，看爹发的钱：</h1>
        <h2>{{money}}</h2><img :src="imgToMySon"/><button @click="do1()">查看图片src属性值</button>

        <p>我想跳转到另外一个页面试试</p>
        <router-link to="../Exam06">我想跳转到另外一个页面试试</router-link>
    </div>
</template>
<script>
export default {
    props:{
        money:"",
        imgToMySon:""
    },
    methods:{
        do1(){
            console.log(this.imgToMySon);
        }
    }
}
</script>