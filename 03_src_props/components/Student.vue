<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ age+1 }}</h2>
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="changeAge()">尝试修改年龄</button>
    </div>
  </template>
  
  <script>
  export default {
    name:'Student',
    data(){
        return {
            msg:'I am a student',
            myAge:this.age,
        }
    },
    // 简单声明接受
    //   props:['name','sex','age'] 

    // 接受的同时对数据类型进行限制
    /* props:{
        name:String,
        age:Number,
        sex:String,
    } */

    // 接受数据的同时对数据：进行类型限制 + 默认值的指定 + 必要性的限制
    props:{
        name:{
            type:String, //name的类型是字符串
            required:true, //name是必要的
        },
        age:{
            type:Number,
            default:1, //默认值
        },
        sex:{
            type:String,
            required:true,
        },
    },

    
    methods:{
        changeAge(){
            // this.age = 99// 不可用此种方法修改age
            this.myAge++
        }
    },
  }
  </script>
  
  <style>
  
  </style>