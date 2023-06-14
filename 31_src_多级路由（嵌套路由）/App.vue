<template>
    <div>
        <div class="row">
            <BannerPage></BannerPage>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原始html中我们使用a标签实现页面跳转 -->
                    <!-- <a class="list-group-item" href="./home.html">Home</a>
                    <a class="list-group-item" href="./about.html">About</a> -->

                    <!-- Vue中借助router-link标签实现路由的切换 -->
                    <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定组件的呈现位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BannerPage from './components/BannerPage.vue';

export default {
    name:'App',
    components:{BannerPage},
}
</script>

<style lang="css">
    .container{
        display: flex;
        max-width: 1000px;
        justify-content: space-around;
    }
</style>
