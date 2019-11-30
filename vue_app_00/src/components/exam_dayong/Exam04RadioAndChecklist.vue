<template>
    <div>
        <h3>mint-ui表单组件</h3>
        <!--1:开关组件-->
        <mt-switch v-model="value1" @change="handle1">动感开关</mt-switch>
        <!--2:单选框列表-->
        <mt-radio  title="单选框列表"  v-model="value2"  :options="['选项A', '选项B', '选项C','选项D']"></mt-radio>
        <mt-button type="primary" size="large" @click="commit">提交单选框值</mt-button>

        <!--3:复选框列表-->
        <mt-checklist  title="复选框列表"  v-model="value3"  :options="['选项A', '选项B', '选项C', '选项D', '选项E', '选项F']"></mt-checklist>
        <mt-button type="primary" size="large" @click="ss">提交复选框值</mt-button>
    </div>
</template>
<script>
//export导出；default 默认对象；（导出一个默认对象）
export default {
    data(){
        return {//返回数据，只给当前组件使用
            value1:true,//默认打开的状态
            value2:"",//保存单选框当前选中的值
            value3:[]//保存复选框当前选中的值
        }
    },
    methods:{
        //change事件触发的函数，当开关组件值发生修改后触发handle1函数的调用
        handle1(){
            console.log(this.value1);
        },
        commit(){
            console.log(`当前单选框选中的选项是：${this.value2}`);
        },
        ss(){
            console.log(`当前复选框选中的选项是${this.value3}`);
        }
    }
}
</script>