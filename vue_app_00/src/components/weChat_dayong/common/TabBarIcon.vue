<template>
    <div>
        <img :src="nowState?selectedImg:notSelectedImg"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        nowState:false,
        selectedImg:"",
        notSelectedImg:""
    }
}
</script>