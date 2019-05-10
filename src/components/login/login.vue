<template>
<div class="login-aside">
    <div class="login-form">
         <span>用户：<input type="text" v-model="User" ></span>  
         <span>密码：<input type="password" v-model="password" placeholder="密码"> </span>    
        <input type="submit" @click="logCheck(User,password)" value="登陆">
    </div>    
</div>
    
</template>
<script>
import { usersInfo } from "../../api/loginCheck"
import { log } from 'util';
import { constants } from 'fs';


export default{
    name:"login",
    conponent:"login",
    template:"</login>",
    data(){
        return{ 
            User:"user1",
            password:"123456",
            //密码正确则给true
            checked:null  
        }
    },
    methods:{
    logCheck(user,psw){
            // usersInfo(user,psw);
       usersInfo(user,psw).then(
           (response)=>{
                 if(response.data.result.length==0) Promise.reject("没有数据");
                    this.checked = response.data.result.some(element =>  element.user==user&&element.psw==psw);
                    console.log(this.checked);
                    if(this.checked)this.$router.push({path:"/home",name:"home"});
                    else{alert("用户密码不正确");}
           } 
       ).catch(
           error=>{
               console.log("error:"+error);
           }
       );
    }
    }
}//导出的名字

</script>
<style>
*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
    width:100%;
}
div{
    height: 100%;
}

.login-aside{
    width: 300px;
    height: 100%;
    /* background: rgb(102, 199, 142); */
    float: right; 
}
.login-form{
    flex-direction: column;
    min-height: 200px;
    height: auto;
    /* background: rgb(0, 174, 255); */
    position: relative;
    top:50%;
    margin-top: -150px;
}

.login-form > span {
    display: block;
    height: 50px;
    /* vertical-align: center; */
    position: relative;
    margin-top:10px; 
}

</style>