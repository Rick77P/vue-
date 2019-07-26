<template>
  <div class="container">
    <div v-if="list.length">
      <table>
        <thead>
          <tr>
            <th>全选 <input type="checkbox" v-model="checkAll"></th>
            <th>序号</th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>


        <tbody v-for="(category,index1) in list" :key="category.id">
          <tr class="category">{{category.name}} <input type="checkbox" v-model="checkCategory[index1]"></tr>
            <!-- v-for 的key值绑定不要用 引用值，最好是数值 -->
          <tr v-for="(item,index) in category.data" :key="item.id">
            <td><input type="checkbox"  v-model="item.check" ></td>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
              <button class='btn'
              @click="handleReduce(item)"
              :disabled="item.count === 1">-</button> 
              {{item.count}}
              <button class = 'btn'
              @click="handleAdd(item)"
              >+</button>
              </td>
            <td>
              <button class='btn btn1' 
              @click='handleRemove(category,index)'
              >移除
              </button>
            </td>
          </tr>
          <div class="categoryPrice">类别总价：￥{{categoryPrice[index1]}}</div>
        </tbody>
      </table>
      <div class="totalPrice">总价：￥{{totalPrice}}</div>
    </div>
    <div class="nothing" v-else>购物车为空</div>
  </div>
</template>
<script>
import { constants } from 'fs';
import { connect } from 'tls';
export default {
  name: "practice",
  data() {
    return {
      checkCategory:[],
      list: [{
        id:1,
        name:"电子产品",
        data:[ {
          id: 1,
          name: "iphone7",
          price: 6188,
          count: 1,
          check:false
        },
        {
          id: 2,
          name: "iPad Pro",
          price: 5888,
          count: 1,
          check: false
        },
        {
          id: 3,
          name: "MacBook Pro",
          price: 21188,
          count: 1,
          check: false
        }]
        }
       ,
       {
          id:2,
          name:"果蔬",
          data: [ {
          id: 1,
          name: "苹果",
          price: 6,
          count: 1,
          check:false
        },
        {
          id: 2,
          name: "西瓜",
          price: 10,
          count: 1,
          check: false
        },
        {
          id: 3,
          name: "葡萄",
          price: 13,
          count: 1,
          check: false
        }]
      }
      ]
    };
  },
  computed:{
      totalPrice(){//这种写法表示只有getter
          var total = 0;
        // return 1;
      },
      categoryPrice:{
        get(){
          let arr= [];
          for(let i=0;i<this.list.length;i++)
          arr[i] = this.list[i].data.reduce((pre,next)=>{
            if(next.check)return pre + next.count*next.price;
            else return pre;
            },0);
          return arr;
        },
        set(newval){
          
        }
      },
      checkAll:{
        get(){
            
          return this.checkCategory.every(item=>item);
        },
        set(newval){         
          let arr = [];
          this.checkCategory.forEach((item,index)=>
          {
            arr[index] = newval;
          });
          this.checkCategory=arr;
          arr = null;
         
        }
      },
      // checkCategory:{//循环调用了
      //   get(){
      //     // let arr = [];
      //     // this.checkCategory.forEach((item,index)=>
      //     // {
      //     //   arr[index] = this.list[index].every(item=>item.check);
      //     // }
      //     // );
      //     // return arr;
      //   },
      //   set(newval){
      //     newval.forEach((item,index)=>{
      //     this.list[index].data.forEach((item1)=>item1.check=item); 
      //   });
      //   }
      // }
  },
  methods:{
    handleReduce(item){
      if(item.count === 1)return;
      else item.count--;
    },
    handleAdd(item){
      item.count++;
    },
    handleRemove(category,index){
      category.data.splice(index,1); 
    },
    checked(item){
      // console.log("check:"+item.check);
      //  console.log("checked:"+item.checked);
    }
  },
  // watch:{//只能完成setter操作
  //   "checkCategory":{
  //     handler(newval,oldval){
  //       newval.forEach((item,index)=>{
  //         this.list[index].data.forEach((item1)=>item1.check=item); 
  //       });
  //     },
  //     immediate:false,
  //     deep:false
  //   }
  // },
  // created:function (params) {
  //     let arr1 = [];
  //     this.list.forEach(()=>arr1.push(false));
  //     this.checkCategory = arr1;
  //   }
  
};
</script>
<style>
.container {
  height: 100%;
  width: 100%;
  background: black;
}
.container table {
  width: 100%;
  color: aliceblue;
  /* display: grid; */
  /* grid-template-columns: 20% 20% 20% 20% 18%; */
  /* grid-template-rows: 100px 100px ; */
}

.container tr {
  width: 90%;
  margin-left: 5%;
  line-height: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: 10% 10% 20% 20% 20% 10%;
}

.container thead {
  background: rgba(3, 4, 36, 0.671);
}
.nothing {
  height: 100px;
  line-height: 100px;
  color: white;
  font-size: 20px;
}
.category{
  display: block!important;
  text-align: start;
  padding-left:2%; 
}
.categoryPrice{
    text-align: end;
    height: 40px;
    background: gray;
    padding-right: 100px;
}
.totalPrice{
    color:aliceblue;
    text-align: end;
    background: grey;
    width: auto;
    padding-right: 5%;
}
.btn{
  width: 20px;
}
.btn1{
  width: 40px;
}
</style>