<template>
<div>
    用户：<input type="text" v-model="User" >
    密码：<input type="password" v-model="password" placeholder="密码">
    <input type="submit" @click="logCheck(User,password)" value="登陆">
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
input {
    display: inline-block;
}

</style>