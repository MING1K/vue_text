// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    /* add(context,value){
        // console.log('actions被调用了',context,value);
        context.commit('ADD',value)
    },
    decr(context,value){
        context.commit('DECR',value)
    }, */
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
}
// 准备mutations——用于操作数据（state）
const mutations = {
    ADD(state,value){
        // console.log('mutations被调用了',state,value);
        state.sum += value
    },
    DECR(state,value){
        state.sum -= value
    },
}
// 准备state——用于存储数据
const state = {
    sum:0, //和
}
//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


// 创建并暴露store
export default new Vuex.Store({
    actions:actions,
    mutations,
    state,
    getters,
})

/* // 创建store
const store = new Vuex.Store({
    actions:actions,
    mutations,
    state,
})

// 导出（暴露）store
export default store */