<template>
    <div class="container">
        <CountNum></CountNum>
        <CountNumVuex></CountNumVuex>
        <PersonInfo></PersonInfo>
    </div>
</template>

<script>
import CountNum from './components/CountNum.vue';
import CountNumVuex from './components/CountNumVuex.vue';
import PersonInfo from './components/PersonInfo.vue';

export default {
    name:'App',
    components:{CountNum,CountNumVuex,PersonInfo},
}
</script>

<style lang="css">
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
