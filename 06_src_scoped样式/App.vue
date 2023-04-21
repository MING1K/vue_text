<template>
    <div>
        <h2 class="title">{{ msg }}</h2>
        <School></School>
        <Student></Student> 
    </div>  
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    data(){
        return{
            msg:'hello,World'
        }
    },
    components:{
        Student,
        School,
    },
}
</script>

<style lang="css">
/* 
lang="css" or lang="less",要安装less-loader
版本问题
实际使用的webpack不是最新版，所以less-loader要适当降1-2个版本
npm view webpack versions
npm view less-loader versions
npm i less-loader@7 
*/
    .title{
        color: red;
    }
</style>
