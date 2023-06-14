<template>
    <div>
        <h1>人员列表</h1>
        <h3 style="color:red">Count组件的sum是：{{ sum }}</h3>
        <h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
        <input type="text" placeholder="请输入姓名" v-model="name" >
        <button @click="addName">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonServer">添加一个人,名字随机</button>

        <ul>
            <li v-for="item in personList" :key="item.id">{{ item.name }}</li>

        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
// import { mapState } from 'vuex';
export default {
    name:'PersonInfo',
    data(){
        return{
            name:'',
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
        // ...mapState('personAbout',['personList']),
    },
    methods:{
        addName(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name = ''
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
            this.name = ''
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    },
}
</script>

<style>

</style>