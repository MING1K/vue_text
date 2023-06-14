<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大十倍为：{{ bigSum }}</h3>
        <h3>学校：{{ school }}，专业：{{ subject }}</h3>
        <!-- 计算属性只适用于当前组件 -->
        <h5>Vuex版本</h5>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name:'CountNumVuex',
    data(){
        return{
            n:1, //用户选择的数字
        }
    },
    computed:{
        // 自己亲自写计算属性
        /* sum(){
            return this.$store.state.sum
        },
        school(){
            return this.$store.state.school
        },
        major(){
            return this.$store.state.subject
        }, */

        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({'sum':'sum',school:'school',major:'subject'}),
        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']), //不能对名称进行更改

        // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
        // ...mapGetters({bigSum:'bigSum'}),
        // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters(['bigSum']),

        /* bigSum(){
            return this.$store.getters.bigSum
        }, */
    },
    methods:{
        increment(){
            this.$store.commit('ADD',this.n)
        },
        decrement(){
            this.$store.commit('DECR',this.n)
        },
        incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait',this.n)
        }
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