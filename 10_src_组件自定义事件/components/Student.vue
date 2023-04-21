<template>
    <div class="text demo">
        <h1>{{ msg }}</h1>
        <h2 class="title">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h3>当前求和为：{{ num }}</h3>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑newDemo事件</button>
        <button @click="des">销毁当前Student组件的实例对象</button>

    </div>
  </template>
  
  <script>
    export default {
        name:'Student',
        data(){
            return {
                msg:'I am a student',
                name:'Jack',
                sex:'男',
                num:0,
            }
        },
        methods:{
            add(){
                console.log('add回调被调用了');
                this.num++
            },
            sendStudentName(){
                // 触发Student组件实例身上的newDemo事件
                this.$emit('newDemo',this.name,1,2,3)
                // this.$emit('demo2')
            },
            unbind(){
                this.$off('newDemo') //解绑一个自定义事件
                // this.$off(['newDemo','demo2']) //解绑多个自定义事件
                // this.$off()//解绑所有的自定义事件
            },
            des(){
                this.$destroy() //销毁了当前Student组件的实例对象，销毁后所有的Student实例自定义事件全都不奏效
            },
        }
    }
  </script>
  
  <style scoped>
    .text{
        background-color: bisque;
    }
    .demo{
        border-radius: 20px;
    }
  </style>