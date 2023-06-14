<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件的sum是：{{ sum }}</h3>
        <input type="text" placeholder="请输入姓名" v-model="name" >
        <button @click="addName">添加</button>
        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }}</li>

        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { mapState } from 'vuex';
export default {
    name:'PersonInfo',
    data(){
        return{
            name:'',
        }
    },
    computed:{
        /* personList(){
            return this.$store.state.personList
        }, */
        ...mapState(['personList','sum']),
    },
    methods:{
        addName(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    },
}
</script>

<style>

</style>