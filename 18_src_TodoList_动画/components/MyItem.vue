<template>
    <!-- <transition name="todo" appear></transition> -->
    <li>
        <label>
            <!-- v-model="todo.done" 可直接修改todo.done，但不符合原则（Vue不允许修改props） -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <!-- @click="handleCheck(todo.id)" -->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                v-show="todo.isEdit" 
                type="text" 
                :value="todo.title" 
                @blur="handleBlur(todo,$event)"
                ref="inputTitle"
            >
                
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
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
        },
        handleEdit(todo){
            if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')){
                todo.isEdit = true
            }
            else{
                this.$set(todo,'isEdit',true)
            }
            // 法二
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
            /* 
            // 法一
            setTimeout(()=>{
                this.$refs.inputTitle.focus()
            }，200) //可以不加时间 队列*/
        },
        // 失去焦点回调（真正执行修改逻辑）
        handleBlur(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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
    /* .todo-enter-active{
        animation: moveAction 0.5s linear;
    }
    .todo-leave-active{
        animation: moveAction 0.5s linear reverse;
    }
    @keyframes moveAction {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0%);
        }
    } */
</style>