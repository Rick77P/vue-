<template>
    <div class="nav-meau"><div class="nav-con fl">
            <ul>
                <!-- v-for 根据数据的数量来遍历，这里的导航数量固定，不需要 -->
                <li class = "icon nav-item" title="主站"></i>主站</li>
                <li class = "nav-item" title="来探索bilibili音乐的世界吧！">音频</li>
                <li class = "nav-item" title="游戏中心"   @mouseover="hover('game')" @mouseleave="leave('game')">
                  游戏中心
                </li>
                <li class = "nav-item" title="直播" name="live" @mouseover="hover('live')" @mouseleave="leave('live')">
                  直播
                </li>
                <li class = "nav-item" @click="download" title="会员购">会员购</li>
                <li class = "nav-item" title="漫画">漫画</li>
                <li class = "nav-item">BML</li>   
                <li class = "nav-item">70年</li>      
            </ul>
        </div><div class="nav-con fr">
            <ul >
                <li class="nav-item profile-info" ><img class="icon-face" src="../../assets/bilibili/image/face.jpg" alt=""><a></a></li>
                <li class="nav-item ">大会员</li>
                <li class="nav-item " title="消息">消息</li>
                <li class="nav-item ">动态</li>
                <li class="nav-item ">稍后再看</li>
                <li class="nav-item ">收藏</li>
                <li class="nav-item ">历史</li>
            </ul>
        </div>
        <div class="up-load ">
            <a>投稿</a>
            </div></div>
</template>
<script>
import { log } from 'util'; 
import { constants } from 'fs';

export default{
    name:'myHeader',
    component:'my-header',
    template:"</my-header>",
    data(){
      return {
        gameE:false,
        playE:false
      }
    },
    methods:{
        hover(name){
            // console.log(name);
            // console.log(this.$store.state.headerStore);
           this.$store.commit('headerStore/show',name);
        },
        leave(name){
            //  console.log(this.$store._mutations['headerStore/show']); 
            this.$store.commit('headerStore/hide',name);         
        },
        download(){
            // window.location.href ='../../assets/test/H5C05AA71_0517100412.apk';
        }

    }


}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration:none;
    outline: none;

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
    min-width: 1100px;
    height: 45px;
    /* background:transparent ; */
    background-color: rgba(255, 255,255, 0.6);
    /* opacity: 0.5; */
    /* overflow-x:hidden ; */

}
.nav-con{
    width: auto;
    display: inline-block;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    /* background: red; */
    
} 

.fl,.fr{
    display: inline-block;
}
.fl {
    /* float: left; */
    vertical-align:top;
    margin-right:250px; 
}
.fr{
    vertical-align:top;
    /* float:right; */
}

.nav-item{
    display: inline-block;
    padding: 0 10px;
    /* background: red; */
}
.nav-item:hover{
    background-color:rgba(255, 255,255, 0.7);
    cursor:pointer;
    content:attr(title);
}
.icon::before{
    content: url(../../assets/bilibili/image/icon.png);
    vertical-align: sub;
    margin-right:2px;
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
