<template>
    <div id='BHeader'>
        <my-header></my-header>
        <header-pop></header-pop>
    </div>
</template>
<script>
import myHeader from "./header"
import headerPop from "./header_pop"

export default{
    name:'BHeader',
    component:'BHeader',
    template:'<BHeader/>',
    components:{
        myHeader,
        headerPop
    }        
    }
</script>
<style>
#BHeader{
    height: 170px;
    width: 100%;
    background:url('../../assets/bilibili/image/game/bg.png');
}
</style>