<template>
    <div class="container">
        <CategoryList title="ms">
            <img slot="center" src="https://img.zcool.cn/community/01d80e5e09f781a801216518695d24.jpg@2o.jpg" alt="">
            <a slot="footer" href="https://www.baidu.com">各地美食</a>
        </CategoryList>
        <CategoryList title="yx">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{ item }}</li>
            </ul>
            <a slot="footer" href="https://www.baidu.com">单机游戏</a>
            <a slot="footer" href="https://www.baidu.com">网络游戏</a>
        </CategoryList>
        <CategoryList title="dy">
            <video slot="center" controls src="https://webstatic.mihoyo.com/upload/static-resource/2023/02/28/45e761439e7b36bca726fe7aad4d5995_4361181102827681545.mp4"></video>
            <div slot="footer">
                <div class="foot">
                    <a href="https://www.baidu.com">网络</a>
                    <a href="https://www.baidu.com">网络</a>
                    <a href="https://www.baidu.com">网络</a>
                </div>
                <h4>欢迎到影院观看！</h4>
            </div>
            <!-- <template v-slot:footer>
                <div class="foot">
                    <a href="https://www.baidu.com">网络</a>
                    <a href="https://www.baidu.com">网络</a>
                    <a href="https://www.baidu.com">网络</a>
                </div>
                <h4>欢迎到影院观看！</h4>
            </template> -->
        </CategoryList>
    </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
export default {
    name:'App',
    components:{CategoryList},
    data(){
        return {
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['原神','穿越火线','劲舞团','超级玛丽','王者荣耀'],
            films:['《教父》','《拆弹专家》','《复仇者联盟》','《蜘蛛侠》']
        }
    }
}
</script>

<style lang="css">
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
</style>
