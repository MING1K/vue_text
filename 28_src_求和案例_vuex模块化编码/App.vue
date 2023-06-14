<template>
    <div class="container">
        <CountNumVuex></CountNumVuex>
        <PersonInfo></PersonInfo>
    </div>
</template>

<script>
import CountNumVuex from './components/CountNumVuex.vue';
import PersonInfo from './components/PersonInfo.vue';

export default {
    name:'App',
    components:{CountNumVuex,PersonInfo},
}
</script>

<style lang="css">
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
