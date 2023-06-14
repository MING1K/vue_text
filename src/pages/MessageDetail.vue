<template>
    <ul>
        <!-- <li>消息编号：{{ $route.params.id }}</li>
        <li>消息标题：{{ $route.params.title }}</li>
        <li>消息内容：{{ $route.params.info }}</li> -->
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
        <li>消息内容：{{ info }}</li>

        <!-- 使用props传递 -->
        <!-- <li>消息a：{{ a }}</li>
        <li>消息b：{{ b }}</li> -->
    </ul>
</template>

<script>
export default {
    name:'MessageDetail',
    /* props:['a','b'], */
    props:['id','title','info']
    /* computed:{
        id(){
            return this.$route.params.id
        },
        title(){
            return this.$route.params.title
        },
        info(){
            return this.$route.params.info
        },
    } */
}
</script>

<style>

</style>