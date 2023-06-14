<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}/${m.info}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->
                
                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <!-- 使用params时此处不允许写path，只能使用name -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title,
                        info:m.info
                    }
                }">
                    {{ m.title }}
                </router-link>
            </li>
            <hr>
            <button @click="messageListServer">加载数据</button>
        </ul>
        <hr>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
    name:'HomeMessage',
    data(){
        return{
            num:5,
            messageList:[]
        }
    },
    methods:{
        messageListServer(){
            this.messageList=[]
            for(let i=1;i<=5;i++){
                axios.get('https://api.uixsj.cn/hitokoto/get?type=hitokoto').then(
                    response=>{
                        this.messageList.push({id:nanoid(),title:'消息'+i,info:response.data})
                    },
                    error=>{
                        alert(error.message)
                    }
                )
            }
        }
    }
}
</script>

<style>

</style>