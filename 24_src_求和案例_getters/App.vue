<template>
    <div class="container">
        <CountNum></CountNum>
        <CountNumVuex></CountNumVuex>
    </div>
</template>

<script>
import CountNum from './components/CountNum.vue';
import CountNumVuex from './components/CountNumVuex.vue';

export default {
    name:'App',
    components:{CountNum,CountNumVuex},
}
</script>

<style lang="css">
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
