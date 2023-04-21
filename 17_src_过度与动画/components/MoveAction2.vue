<template>
    <div class="move-action">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="helloShow2" appear>
            <h1 v-show="isShow" key="1">hello world</h1>
            <h1 v-show="isShow" key="2">hello world</h1>
            <h1 v-show="!isShow" key="3">WOW</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name:'MoveAction2',
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
    /* 进入的起点, 离开的终点 */
    .helloShow2-enter, .helloShow2-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的终点, 离开的起点*/
    .helloShow2-enter-to, .helloShow2-leave{
        transform: translateX(0%);
    }
    /* .helloShow2-enter-active .helloShow2-leave-active{
        transition: 0.5s linear;
    } */
</style>