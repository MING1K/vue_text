// 求和功能相关的配置
export default{
    namespaced:true,
    actions:{
        addOdd(context,value){
            if(context.state.sum%2){
                context.commit('ADD',value)
            }
        },
        addWait(context,value){
            setTimeout(()=>{
                context.commit('ADD',value)
            },500)
        }
    },
    mutations:{
        ADD(state,value){
            // console.log('mutations被调用了',state,value);
            state.sum += value
        },
        DECR(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0, //和
        school:'Beijing',
        subject:'Math',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}