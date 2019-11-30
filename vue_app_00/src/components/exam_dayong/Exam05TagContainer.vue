<template>
  <div>
    <mt-button data-id="tab-container1" @click="handle($event)">购物</mt-button>
    <mt-button data-id="tab-container2" @click="handle($event)">美食</mt-button>
    <mt-button data-id="tab-container3" @click="handle($event)">电脑</mt-button>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" :key="n" title="tab-container1">购物</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" :key="n" title="tab-container 2">美食</mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 3">电脑</mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "tab-container1"
    };
  },
  methods:{
    handle(e){//e自动赋值为事件对象
      //完成子面板组件之间的切换
        var i=e.target.dataset.id;
        this.active=i;
        console.log(i);
      
    }
  }
};
</script>