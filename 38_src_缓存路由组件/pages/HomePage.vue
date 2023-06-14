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
            <!-- include是组件名，不写include表示全部缓存 -->
            <!-- 缓存多个路由组件 -->
            <keep-alive :include="['HomeNews','HomeMessage']">
                <router-view></router-view>
            </keep-alive>
            <!-- 缓存一个路由组件 -->
            <!-- <keep-alive include="HomeNews">
                <router-view></router-view>
            </keep-alive> -->
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