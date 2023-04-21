<template>
    <div class="text demo">
        <h1>{{ msg }}</h1>
        <h2 class="title">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
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
            }
        },
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