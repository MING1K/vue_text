<template>
    <div class="text demo">
        <h1>{{ msg }}</h1>
        <h2 class="title">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h3>当前求和为：{{ num }}</h3>
        <button @click="sendSchoolStudentName">把学生名给School组件</button>

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
            sendSchoolStudentName(){
                this.$bus.$emit('hello',this.name)
            }
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