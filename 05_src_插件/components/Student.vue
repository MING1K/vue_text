<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name | myslice }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <input type="text" v-fbind2:value="name">
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
  
  <style>
  
  </style>