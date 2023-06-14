<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大十倍为：{{ bigSum }}</h3>
        <h3>学校：{{ school }}，专业：{{ subject }}</h3>
        <h3 style="color:red">Person组件的总人数是：{{ personList.length }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
    name:'CountNumVuex',
    data(){
        return{
            n:1, //用户选择的数字
        }
    },
    computed:{
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        // ...mapState(['countAbout','personAbout']), //不能对名称进行更改  // 需要countAbout.num

        ...mapState('countAbout',['sum','school','subject']), //不能对名称进行更改
        ...mapState('personAbout',['personList']), //不能对名称进行更改

        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters('countAbout',['bigSum']),
    },
    methods:{
        // 借助mapMutations生成对应方法，方法中会调用commit去联系mutations（对象写法）
        ...mapMutations('countAbout',{increment:'ADD',decrement:'DECR'}),
        // 借助mapMutations生成对应方法，方法中会调用commit去联系mutations（数组写法）
        // ...mapMutations(['ADD','DECR'])

        // 借助mapMutations生成对应方法，方法中会调用dispatch去联系actions（对象写法）
        ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'}),
        // 借助mapMutations生成对应方法，方法中会调用dispatch去联系actions（数组写法）
        // ...mapActions(['addOdd','addWait']),

    },
    mounted(){
    },
}
</script>

<style>
    button {
        margin-left:10px;
    }
</style>