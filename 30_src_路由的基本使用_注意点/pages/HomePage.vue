<template>
    <h2>我是Home内容</h2>
</template>

<script>
export default {
    name:'HomePage',
    beforeDestroy(){
        console.log('HomePage组件即将被销毁');
    },
    mounted(){
        console.log('HomePage组件挂载完毕',this);
    }
}
</script>

<style>

</style>