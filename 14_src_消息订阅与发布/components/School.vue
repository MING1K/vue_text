<template>
  <div class="demo">
    <h2 class="title">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button>把学校名给App</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return {
            name:'whu',
            address:'beijing',
        }
    },
    methods:{
      demo(msgName,data){
        console.log('有人发布了消息，消息为：',msgName,data);
      }
    },
    mounted(){
      /* console.log('School',this);
      this.$bus.$on('hello',(data)=>{
        console.log('我是School组件，收到了数据',data);
      }) */
      this.pubId = pubsub.subscribe('hello',this.demo)
      /* this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
      }) */
      /* this.pubId = pubsub.subscribe('hello',function(msgName,data){
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
      }) */
    },
    beforeDestroy(){
      /* this.$bus.$off('hello') */
      pubsub.unsubscribe(this.pubId)
    }

}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>