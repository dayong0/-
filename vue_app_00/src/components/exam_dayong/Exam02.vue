<template>
    <div>
        <h3>交互式弹窗案例</h3>
        <button @click="open1">提示框 </button>
        <button @click="open2">提示框 </button>
        <button @click="open3">提示框 </button>
        <h4>表单输入框mint-ui案例</h4>
        <mt-field label="用户名" placeholder="输入用户名" v-model="uname" ></mt-field>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:""   //双向绑定用户名
        }
    },
    methods:{
        open1(){
            //功能1:创建简写交互提示框
            this.$messagebox("消息","执行成功");
        },
        open2(){
            //功能2：创建交互确认提示框
            this.$messagebox.confirm("你真的要删除指定数据吗？")
            .then(action=>{//用户选择确认
                console.log("确认")
                })
            .catch(err=>{//用户选择取消
                console.log("取消")
                });
        },
        open3(){
            //功能3：输入框
            this.$messagebox.prompt("您的年龄多大了？").//显示输入框进行输入
            then((value)=>{console.log(value)}).//用户输入后点确认
            catch(err=>{console.log(err)});//用户输入后点取消
        }
    }
}
</script>