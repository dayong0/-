<template>
  <div>
    <canvas id="cc1296" width="800" height="600"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    
   
      let cc = document.getElementById("cc1296");
      console.log(document + "***" + cc);
      let ctx = cc.getContext("2d");
      ctx.strokeRect(100, 500, 20, 100);
      ctx.fillStyle = ()=>{
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }
      ctx.fillRect(200, 500, 20, 80);
    

  }
};
</script>
<style scoped>
canvas{
    background-color: blanchedalmond;
}
</style>