<template>
    <h2>我是About内容</h2>
</template>

<script>
export default {
    name:'AboutPage',
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to,from,next){
        console.log('App-beforeRouteEnter-AboutPage')
        console.log('beforeRouteEnter',to,from);
        if(to.meta.isAuth){ // 判断是否需要鉴权
            if(localStorage.getItem('check')==='yes'){
                next()
            }
            else{
                alert('check is not yes, you cannot see it')
            }
        }
        else{
            next()
        }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to,from,next){
        console.log('App-beforeRouteLeave-AboutPage',to,from)
        next()
    }
}
</script>

<style>

</style>