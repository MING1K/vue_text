<template>
    <div class="move-action">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="helloShow" appear>
            <h1 v-show="isShow">hello world</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'MoveAction',
    data(){
        return{
            isShow:true,
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }
    .helloShow-enter-active{
        animation: moveAction 0.5s linear;
    }
    .helloShow-leave-active{
        animation: moveAction 0.5s linear reverse;
    }
    @keyframes moveAction {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }
</style>