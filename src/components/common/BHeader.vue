<template>
    <div id='BHeader'>
        <div id='header'>
            <my-header></my-header>
             <header-pop></header-pop>
             <div class='search-line'>
                <div class="search">

                </div>
             </div>
        </div>
        <my-menu></my-menu>
    </div>
</template>
<script>
import myHeader from "./header"
import headerPop from "./header_pop"
import myMenu from './MyMenu'

export default{
    name:'BHeader',
    component:'BHeader',
    template:'<BHeader/>',
    components:{
        myHeader,
        headerPop,
        myMenu
    }        
    }
</script>
<style>
#BHeader{
    height: 229px;
}
#header{   
    height: 170px;
    width: 100%;
    background:url('../../assets/bilibili/image/game/bg.png') no-repeat;
}
.search-line{
    top:110px;
    position: relative;
    background: green;
    width: 100%;
    height: 32px;
    min-width: 1100px;
}

.search{
    position: absolute;
    height: 32px;
    width:268px;
    background: blue;
    
}

</style>