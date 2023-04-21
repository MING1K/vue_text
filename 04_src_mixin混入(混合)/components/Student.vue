<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        
    </div>
  </template>
  
  <script>
    // import {hunhe,hunhe2} from '../mixin'
    export default {
        name:'Student',
        data(){
            return {
                msg:'I am a student',
                name:'Harry Potter',
                sex:'男',
            }
        },
        mounted() {
            console.log('hello!!!!!!');        
        },
        // mixins:[hunhe,hunhe2],
        /* methods:{
            showName(){
                alert(this.name)
            }
        }, */
    }
  </script>
  
  <style>
  
  </style>