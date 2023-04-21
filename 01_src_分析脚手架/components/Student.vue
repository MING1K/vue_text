<template>
    <div>
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click='showName'>点我提示信息</button>
    </div>
</template>

<script>

    export default{
        name:'Student',
        data(){
            return {
                name:'Jack',
                age:18,
            }
        },
        methods:{
            showName(){
                alert(this.name)
            }
        }
    }

</script>