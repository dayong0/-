<template>
    <div>
        <h3>请输入用户名和密码以验证登录
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
             <mt-field label="年龄" placeholder="请输入用户的年龄" v-model="userage"></mt-field>
            <mt-button @click="check" size="large"  type="primary">点击登录</mt-button>
        </h3>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:"",//双向绑定用户名
            password:"",//双向绑定密码
            userage:""//双向绑定年龄
        }
    },
    methods:{
        check(){
           // console.log(this.username+""+this.password);
           var ureg=/^[a-z0-9]{3,12}$/i;
           var areg=/^[0-9]{1,2}$/;
           var u=this.username;
           var p=this.password;
           var a=this.userage;
            if(ureg.test(u)==false){this.$messagebox("提示您：","用户名格式不正确！");
             return;//直接终止函数的执行
             }
             if(areg.test(a)==false){this.$messagebox("提示您：","年龄格式不正确");
             return;
             }

        }
    }
}
</script>