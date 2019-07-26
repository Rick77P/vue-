import { compile } from "vue-template-compiler";

function createIterator(items){
    var i = 0;
    return {
        next:function(){
            var done = (i>=items.length);
            var value = done?undefined:items[i++];
            return {
                value : value,
                done : done
            }
        }
    }
}
//生成器
function *createIterator1(){
    yield 12;
    yield 2;
    yield 3;
}

function *createIterator2(items){
	for(let i = 0;i<items.length;i++){
		yield items[i];
	}
}
// var iterator = createIterator2([11,12,13]);
// console.log(iterator.next());//{value:1,done:false}
// console.log(iterator.next());//{value:2,done:false}
// console.log(iterator.next());//{value:3,done:false}
// console.log(iterator.next());//{value:undefined,done:true}

//做一个for of循环
//创建可迭代对象
//可迭代对象的方法 返回一个迭代器

// Function.prototype.Apply = function (obj,arr){
//     this.call(obj,...arr);//方法的实现都写在方法中即可，下一步才是Object.prototype上找。
// }

// let value = [1,22,333];
// function for_of(arr,func){
//     let iterator = arr[Symbol.iterator]();
//     let i = iterator.next();
//     let [,,...arg] = [...arguments];//解构赋值 只要第三个之后的参数，且以数组形式显示
//     console.log(arg);
//     while(!i.done){
//         func.Apply(i,arg);//this=i;arg = 数组;apply后面传入的是数组，但是绑定的函数的参数还是按第一个，第二个依次引用
//         i = iterator.next();    
//     } 
// }
// function func(a,b){//使用迭代需要用this.value
//     console.log(this.value);
//     console.log(a,b);
// }
// func.Apply=function(){
//     console.log(1);//先找函数的私有属性有没有改方法
// }
// func.prototype.Apply = function(){
//     console.log(2);//打印的是Function.prototype.Apply中的结果.不会打印2
//     //再找构造函数的原型上有没有！！！（不会去当前函数的prototype上找，当前函数的prototype中的方法只被其构造的函数公用）
// }
// for_of(value,func,112,123);

//判断是否是可迭代对象 symbol是变量，只能这样访问。如果用点的形式，则Symbol以字符串形式表示
// function isIterator(obj){
//     return typeof obj[Symbol.iterator] === 'function';
// }
// console.log(isIterator()) ;
//创建可迭代对象
// let collection = {
//     items:[],
//     *[Symbol.iterator](){
//         for(let item of  this.items){
//             yield item;
//         }
//     }
// };
// collection.items = [1,2,3];
// for(let x of collection){
//     console.log(x);
// }


export {createIterator}