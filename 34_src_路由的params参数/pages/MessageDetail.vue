<template>
    <ul>
        <li>消息编号：{{ $route.params.id }}</li>
        <li>消息标题：{{ $route.params.title }}</li>
        <li>消息内容：{{ $route.params.info }}</li>
    </ul>
</template>

<script>
export default {
    name:'MessageDetail',
}
</script>

<style>

</style>