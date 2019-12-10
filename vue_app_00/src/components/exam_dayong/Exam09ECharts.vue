<template>
  <div id="main" style="width:500px;height:400px;">
      <button @click="doIt()">點擊查看案例</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    doIt() {
      //     （4）通过js获取存储图形容器。
      var main = document.getElementById("main");
      // （5）创建 mychart对象：表示当前销售统计图。#echarts，百度绘图库提供一个对象。
    
      var mychart = this.$echarts.init(main);
      // （6）创建配置option对象。
      var option = {
        title: { text: "大用入门实例" },//標題
        xAxis:{data:["牛奶","鞋","針織衫","床單被砸"]},//x軸
        yAxis:{},//y軸
        series:[{type:"bar",data:[100,10,20,1]}]//数据
      };

      // （7）将配置对象添加mychart对家中
      mychart.setOption(option);
    }
  }
};
</script>
<style scoped>
</style>