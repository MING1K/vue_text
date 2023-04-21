<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :games="games">我是默认的一些内容</slot>
    </div>  
</template>

<script>
export default {
    name:'CategoryList',
    props:['title'],
    data(){
        return{
            games:['原神','穿越火线','劲舞团','超级玛丽','王者荣耀'],
        }
    },
}
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    h4{
        text-align: center;
    }
    li{
        line-height: 30px; 
    }
    img{
        width: 100%;
    }
    video{
        width:100%
    }
    a{
        padding: 5px 5px;
    }
</style>