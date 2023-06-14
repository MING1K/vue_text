<template>
    <ul>
        <h2 :style="{opacity}">欢迎学习Vue</h2>
        <li>news001：<input type="text"></li>
        <li>news002：<input type="text"></li>
        <li>news003：<input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'HomeNews',
    data(){
        return{
            opacity:1
        }
    },
    /* beforeDestroy(){
        console.log('定时器将要被销毁了');
        clearInterval(this.timer)
    }, */
    /* mounted(){
        console.log('定时器开始了');
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if(this.opacity <= 0)this.opacity = 1
        },16)
    }, */
    activated(){
        console.log('HomeNews激活了');
        this.timer = setInterval(() => {
            console.log('@');
            this.opacity -= 0.01
            if(this.opacity <= 0)this.opacity = 1
        },16)
    },
    deactivated(){
        console.log('HomeNews组件失活了');
        clearInterval(this.timer)
    },
}
</script>

<style>

</style>