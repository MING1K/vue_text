<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <School></School>
        <Student/>
    </div>  
</template>

<script>
    // 引入组件
    import School from "./components/School.vue";
    import Student from "./components/Student";

    export default {
        name:'App',
        components:{
            School,
            Student,
        }
    }

</script>

<style>

</style>