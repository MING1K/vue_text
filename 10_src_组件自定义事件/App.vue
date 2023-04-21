<template>
    <div>
        <h2 class="title">{{ msg }} · 学生姓名是：{{ studentName }}</h2>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <!-- <Student v-on:newDemo="getStudentName"></Student>  -->
        <!-- <Student @newDemo.once="getStudentName"></Student>  -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
        <Student ref="student" @demo2="m1"></Student>
        <!-- <Student ref="student" @demo2="m1" @click.native="show"></Student> -->
        <!-- 必须加.native才为原生事件，否则会被认为自定义事件 -->

    </div>  
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    data(){
        return{
            msg:'hello, World',
            studentName:''
        }
    },
    components:{
        Student,
        School,
    },
    methods:{
        getSchoolName(name){
            console.log('App收到了学校名',name);
        },
        getStudentName(name,...params){
            console.log('App收到了学生名',name,params); // params 参数  
            this.studentName = name
        },
        m1(){
            console.log('demo2被触发了');
        },
        /* show(){
            alert('123')
        } */
    },
    mounted(){
        // 可行，推荐
        this.$refs.student.$on('newDemo',this.getStudentName)

        /* //可行
        this.$refs.student.$on('newDemo',(name,...params)=>{//箭头函数没有自己的this，往外找this为App的实例对象
            console.log('App收到了学生名',name,params); 
            console.log(this); // 此处的this为App的实例对象
            this.studentName = name
        }) */
        /* //不可行
        this.$refs.student.$on('newDemo',function(name,...params){
            console.log('App收到了学生名',name,params); 
            console.log(this); // 此处的this为Student的实例对象
            // this.studentName = name
        }) */

        // this.$refs.student.$once('newDemo',this.getStudentName) // 一次性

        /* setTimeout(()=>{
            this.$refs.student.$on('newDemo',this.getStudentName)
        },3000) */
    },
}
</script>

<style lang="css">
/* 
lang="css" or lang="less",要安装less-loader
版本问题
实际使用的webpack不是最新版，所以less-loader要适当降1-2个版本
npm view webpack versions
npm view less-loader versions
npm i less-loader@7 
*/
    .title{
        color: red;
    }
</style>
