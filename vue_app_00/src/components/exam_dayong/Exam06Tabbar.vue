<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../../assets/100x100.png" />
        外卖
      </mt-tab-item>
  
      <mt-tab-item id="发现">
        <img slot="icon" src="../../assets/100x100.png" />
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/100x100.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>

    <mt-tab-container v-model="active"  swipeable=false>
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" title="tab-container 1" :key="n">外卖</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 5" title="tab-container 2" :key="n">发现</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 7" title="tab-container 3" :key="n">我的</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
    data(){
        return {
            selected:"",
            active:"我的"
        }
    },
    watch:{
        selected(){
            console.log(this.selected);
            this.active=this.selected;
        }
        
    }
}
</script>