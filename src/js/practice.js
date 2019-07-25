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
var iterator = createIterator2([11,12,13]);
console.log(iterator.next());//{value:1,done:false}
console.log(iterator.next());//{value:2,done:false}
console.log(iterator.next());//{value:3,done:false}
console.log(iterator.next());//{value:undefined,done:true}

export {createIterator}