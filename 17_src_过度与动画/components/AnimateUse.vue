<template>
    <div class="move-action">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            appear 
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" key="1">hello world</h1>
            <h1 v-show="isShow" key="2">hello world</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name:'AnimateUse',
    data(){
        return{
            isShow:true,
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: skyblue;
        transition: 0.5s linear;
    }
</style>