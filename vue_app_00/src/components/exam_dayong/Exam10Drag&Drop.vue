<template>
  <div>
    <h5>拖动与释放</h5>
    <img id="t" src="../../img/menu2.png" />
    <img id="p3" src="../../img/menu3.png" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("***");
    //功能：熟悉拖放源对象与目标对象
    //1：获取p3源对象
    var p3 = document.getElementById("p3");
    //2：绑定事件：拖动开始
    p3.ondragstart = () => {
      console.log("**1*");
    };
    //3：绑定事件：拖动中
    p3.ondrag = () => {
      console.log("**2*");
    };
    //4：绑定事件：拖动结束
    p3.ondragend = () => {
      console.log("**3*");
    };

    //拖动目标对象（不会动）触发四个事件
    var t = document.getElementById("t");
    //拖动进入
    t.ondragenter = () => {
      console.log("t**1*");
    };
    //拖动悬停【有默认行为，悬停结束，会自动跳到离开，永远也不会执行到释放】
    t.ondragover = (event) => {
        //需要阻止默认行为
        event.preventDefault();
      console.log("t**2*");
    };
    //拖动离开
    t.ondragleave = () => {
      console.log("t**3*");
    };
    //释放
    t.ondrop = () => {
      console.log("t**4*");
    };
  }
};
</script>