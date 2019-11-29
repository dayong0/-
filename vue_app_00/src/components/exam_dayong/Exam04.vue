<template>
    <div>
        <h3>mint-ui表单组件</h3>
        <!--1:开关组件-->
        <mt-switch v-model="value1" @change="handle1">动感开关</mt-switch>
        <!--2:单选框列表-->
        <!--3:复选框列表-->


    </div>
</template>
<script>
//export导出；default 默认对象；（导出一个默认对象）
export default {
    data(){
        return {//返回数据，只给当前组件使用
            value1:true
        }
    },
    methods:{
        //change事件触发的函数，当开关组件值发生修改后触发handle1函数的调用
        handle1(){
            console.log(this.value1);
        }
    }
}
</script>