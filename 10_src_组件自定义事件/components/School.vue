<template>
  <div class="demo">
    <h2 class="title">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchooolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:'whu',
            address:'beijing',
        }
    },
    methods:{
      sendSchooolName(){
        this.getSchoolName(this.name)
      }
    }

}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>