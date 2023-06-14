<template>
    <ul>
        <li>消息编号：{{ $route.query.id }}</li>
        <li>消息标题：{{ $route.query.title }}</li>
        <li>消息内容：{{ $route.query.info }}</li>
    </ul>
</template>

<script>
export default {
    name:'MessageDetail',
}
</script>

<style>

</style>