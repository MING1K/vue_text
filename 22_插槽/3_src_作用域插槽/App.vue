<template>
    <div class="container">
        <CategoryList title="yx">
            <template scope="objData">
                <ul>
                    <li v-for="(item,index) in objData.games" :key="index">{{ item }}</li>
                </ul>
                <h4>{{ objData }}</h4>
            </template>
            
        </CategoryList>

        <CategoryList title="yx">
            <template scope="{games}">
                <ol>
                    <li v-for="(item,index) in games" :key="index">{{ item }}</li>
                </ol>
            </template>
            
        </CategoryList>

        <CategoryList title="yx">
            <template slot-scope="{games}">
                <h4 v-for="(item,index) in games" :key="index">{{ item }}</h4>
            </template>
        </CategoryList>
    </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
export default {
    name:'App',
    components:{CategoryList},
}
</script>

<style lang="css">
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
</style>
