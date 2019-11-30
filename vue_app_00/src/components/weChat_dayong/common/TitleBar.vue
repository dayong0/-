<template>
  <div class="page-head">
      <!--<h5>common/TitleBar.vue</h5> -->
      <span>微信（11）</span>
      <div class="page-head-right">
        
        <div>
        <img :src="require('../../../assets/ic_search.png')"/>
      </div>
      <div>
        <img :src="require('../../../assets/ic_add.png')"/>
      </div>
      

      </div>
  </div>
</template>
<script>
export default {};
</script>

<style  scoped>
.page-head{
   
    color: antiquewhite;
    font-size: 160%;
    height: 80px;
    width:100%;
    background-color:rgb(31, 30, 30);
    border:1px solid red;
}
.page-head>span{
  
  line-height: 80px;
}
.page-head-right{
  border: 0px solid gold;
  float: right;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  height: 80px;
  align-items: center;

}
.page-head-right>div>img{
  width: auto;
  margin: 0  20px;
  height: 40px;
}

</style>