<!-- 组件的三要素：-->
<template>
    <div>
        <h3>mint-ui的组件库toast的代码案例</h3>
    </div>
</template>
<script>
//exprot导出
//default对象
export default {
    //created事件函数，当前组件创建成功后调用函数
    created(){
        //this代表当前组件对象
        //$toast组件短消息（默认3秒钟自动消失）
        this.$toast({
            message:"操作成功！",//弹窗的消息
            position:"top",//位置 top/bottom/middle
            duration:5000,//持续时间(单位毫秒)
            iconClass:"iconfont icon-gouwuche" //自定义提示图标【需要在main.js引入字体图标对应css文件】
           
            //问题：mint-ui自带图标外观差，不能满足商品化水平要求。需要去专业图标库选用
            //阿里巴巴旗下的图标库 www.iconfont.cn
        }); 
    }  
}
</script>