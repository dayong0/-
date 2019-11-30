<template>
<!-- 微信所有消息面板布局-->
    <div>
    <div v-for="(m,i) of list" :key="i" class="rootstyle">
        <!-- <h3>我是所有消息列表面板</h3> -->
        <div class="leftimg">
            <img class="imgstyle" :src="require('../../../assets/avator.jpeg')" />
            <div class="titlestyle" >
                <span class="spantitle">{{m.title}}</span>
                <span class="subtitle">{{m.subtitle}}</span>
            </div>
        </div>
        <div class="rightimg">
            <span class="spantime">{{m.time}}</span>
        </div>
    </div>
   
    </div>
</template>
<script>
//引入json文件，读取json文件过来后就成为一个对象（json文件中的{}变为js对象）
import mlist from "../json/messagelist.json"
export default {
    data(){
        return {
            list:mlist.data
        }
    }
}
</script>
<style scoped>
.rootstyle{

    border-bottom: 2px ;
    border-color: red;
    display: flex;
    justify-content: space-between
}
.leftimg{
    display: flex;
}
.leftimg>.imgstyle{
    height: 60px;
    width: auto;
}
.leftimg>.titlestyle{
    display: flex;
    flex-direction: column;
    margin-left: 7px;
}
.rightimg{
    line-height: 60px;
}
.spantitle{
    color: black;
    font-size: 17px;

}
.subtitle{
    color:gray;
    margin-top: 4px;
}
</style>