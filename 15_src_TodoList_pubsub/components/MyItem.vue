<template>
    <li>
        <label>
            <!-- v-model="todo.done" 可直接修改todo.done，但不符合原则（Vue不允许修改props） -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <!-- @click="handleCheck(todo.id)" -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 声明接受todo对象
    props:['todo'],
    methods: {
        handleCheck(id){
            // 通知App组件将对应的done值取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        handleDelete(id){
            if(confirm('确定删除吗？')){
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo',id)
                pubsub.publish('deleteTodo2',id)
            }
        }
    },
}
</script>

<style scoped>
    /* Item */
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before{
        contain: initial;
    }
    li:last-child{
        border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>