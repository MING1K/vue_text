<template>
    <div>
        <h3>Home组件内容</h3>
        <div>
            <ul class="nav nav-tabs">
                <li>
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
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