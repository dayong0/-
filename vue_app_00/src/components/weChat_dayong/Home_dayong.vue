<template>
  <div>
    <!--唯一的父组件Home.vue -->
    <title0></title0>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
          <message0></message0>
        
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <mt-cell  title="tab-container 2">面板2</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <mt-cell title="tab-container 3">面板3</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar  fixed v-model="selected">
  <mt-tab-item id="tab1" @click.native="changeState(1)">
    <tabBarIcon :nowState="nowS[0]" :selectedImg="require('../../assets/ic_weixin_selected.png')" :notSelectedImg="require('../../assets/ic_weixin_normal.png')"></tabBarIcon>
    聊天
  </mt-tab-item>
  <mt-tab-item id="tab2" @click.native="changeState(2)">
        <tabBarIcon :nowState="nowS[1]" :selectedImg="require('../../assets/ic_weixin_selected.png')" :notSelectedImg="require('../../assets/ic_weixin_normal.png')"></tabBarIcon>

    朋友圈
  </mt-tab-item>
  <mt-tab-item id="tab3" @click.native="changeState(3)">
     <tabBarIcon :nowState="nowS[2]" :selectedImg="require('../../assets/ic_weixin_selected.png')" :notSelectedImg="require('../../assets/ic_weixin_normal.png')"></tabBarIcon>

    我的
  </mt-tab-item>

</mt-tabbar>
    
  </div>
</template>
<script>
import tabBarIcon from "./common/TabBarIcon.vue"
import TitleBar from "./common/TitleBar.vue";
import MessageList from "./common/MessageList";
export default {
    data(){
        return {
            active:"tab1",
            selected:"tab1",
            nowS:[true,false,false]
        }
    },
    methods:{
      changeState(i){
        console.log("IIIIII:"+i);
        //发生点击事件后，在是否选中之间改变状态（改变selected的值）
        this.nowS.forEach((e,i,arr) => {
          arr[i]=false;
        });
        this.nowS[i-1]=true;
      }
    },
    watch:{
      selected(){
        this.active=this.selected;
      }
    },
    
      updated(){
        console.log(this.active)
        console.log(this.selected)
      
    },
  components: {
    tabBarIcon:tabBarIcon,
    title0: TitleBar,
    message0: MessageList
  }
};
</script>
<style scoped>
.mint-tabbar > .mint-tab-item{
  color:black;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: aqua;
}
</style>