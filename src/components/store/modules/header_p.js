const state ={
    gameH:false,
    liveH:false,
    styleH:'box'
};

const mutations={
    show(state,name) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.gameH = true;
        // console.log(state.gameH);
        if(name){
        let arr = state.styleH.split(' ');
        if(!arr.some((item)=>item===name)){//防止类名重复
            state.styleH += ' ';
            state.styleH += name;
        }
        // if(state.styleH.indexOf(name)==-1){
        //      state.styleH += name; 
        // }//可能出现包含的名字
        // console.log(state.styleH);  
        }
        else console.log("name没有传过来");
    },
    hide(state,name) {  //同上
        state.gameH = false;
        if(name){
            let arr = state.styleH.split(' ');
            arr.forEach((element,index) => {
               if(element === name){
                   arr.splice(index,1);
               } 
            });//根据加入方式，其实可以优化，只删除最后一个
            state.styleH = arr.join(' ');
        //  console.log(state.styleH);
        }else{
            console.log("name没有传过来");
        }
    }
};

export default {
    namespaced:true,
    state,
    mutations
}