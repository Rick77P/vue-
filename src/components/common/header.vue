<template>
    <div class="nav-meau">
        <div class="nav-con fl">
            <ul>
                <!-- v-for 根据数据的数量来遍历，这里的导航数量固定，不需要 -->
                <li class = "icon nav-item">主站</li><li class = "nav-item">音频</li>   
                <li class = "nav-item">游戏中心</li>   
                <li class = "nav-item">直播 </li>   
                <li class = "nav-item">会员购</li>   
                <li class = "nav-item">漫画</li>
                <li class = "nav-item">BML</li>   
                <li class = "nav-item">70年</li>      
            </ul>
        </div><div class="nav-con fr">
            <ul class="fr">
                <li class="nav-item profile-info"><img class="icon-face" src="../../assets/bilibili/image/face.jpg" alt=""><a></a></li>
                <li class="nav-item ">大会员</li>
                <li class="nav-item ">消息</li>
                <li class="nav-item ">动态</li>
                <li class="nav-item ">稍后再看</li>
                <li class="nav-item ">收藏</li>
                <li class="nav-item ">历史</li>
            </ul>
        </div><div class="up-load fr">
            <a >投稿</a>
        </div>
    </div>
</template>
<script>
export default{
    name:'myHeader',
    component:'my-header',
    template:"</my-header>"
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
ul,ol{
    list-style: none;
    font-size: 0;
}
li{font-size: 12px;}

html,body{
    width:100%;
    height: 100%;
}
.nav-meau{
    position: relative;
    width:100%;
    min-width: 980px;
    height: 45px;
    background: #f5f5f5;
    color:#000;
}
.nav-con{
    width: auto;
    display: inline-block;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
} 

.fl,.fr{
    display: inline-block;
}
.fl {
    float: left;
    margin-left: 5%;
}
.nav-item{
    display: inline-block;
    padding: 0 10px;
    /* background: red; */
}
.nav-item:hover{
    background: #fff;
    cursor:pointer;
}
.icon::before{
    content: url(../../assets/bilibili/image/icon.png);
    vertical-align: sub;
}
.profile-info{
    height: 45px;
    line-height: 45px;

}
.icon-face{
    display: inline-block;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    vertical-align: middle;
}
.up-load{
    /* margin-left:12px;  */
    padding-top: 12px;
    display: inline-block;
    width: 68px;
    height: 40px;
    background: #f45a8d;
    border-bottom-right-radius:5px; 
    border-bottom-left-radius:5px; 
    color:#fff;
}
.up-load:hover{
    background: #fb7299;
    cursor:pointer;
}
.up-load a{
    vertical-align: middle;
}
</style>