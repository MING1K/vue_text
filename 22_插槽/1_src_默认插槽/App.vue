<template>
    <div class="container">
        <CategoryList title="ms">
            <img src="https://img.zcool.cn/community/01d80e5e09f781a801216518695d24.jpg@2o.jpg" alt="">
        </CategoryList>
        <CategoryList title="yx">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{ item }}</li>
            </ul>
        </CategoryList>
        <CategoryList title="dy">
            <video controls src="https://webstatic.mihoyo.com/upload/static-resource/2023/02/28/45e761439e7b36bca726fe7aad4d5995_4361181102827681545.mp4"></video>
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
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
