<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click='showName'>点我提示信息</button>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）

    export default { //默认暴露①
        name:'School',
        data(){
            return {
                name:'whu',
                address:'Beijing',
            }
        },
        methods:{
            showName(){
                alert(this.name)
            }
        }
    }


    /* export default Vue.extend({ //默认暴露①
        data(){
            return {
                name:'whu',
                address:'Beijing',
            }
        },
        methods:{
            showName(){
                alert(this.name)
            }
        }
    })
    // export default school //默认暴露② */
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: skyblue;
    }
</style>