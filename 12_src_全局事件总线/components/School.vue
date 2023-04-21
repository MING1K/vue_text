<template>
  <div class="demo">
    <h2 class="title">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button>把学校名给App</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'whu',
            address:'beijing',
        }
    },
    methods:{

    },
    mounted(){
      console.log('School',this);
      this.$bus.$on('hello',(data)=>{
        console.log('我是School组件，收到了数据',data);
      })
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }

}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>