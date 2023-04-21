<template>
    <div>
        <student name="Jack" sex="男" :age="18"/>
        <student name="Mary" sex="女" :age="18"/>
        <student name="John" sex="男"/>
    </div>  
</template>

<script>
// import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    data(){
        return{
            msg:'hello,World'
        }
    },
    components:{
        Student,
    },
    methods: {
        showDom(){
            console.log(this.$refs.title);//真实DOM元素
            console.log(this.$refs.btn);//真实DOM元素
            console.log(this.$refs.sch);//School组件的实例对象（VueComponent）
        },
    },
}
</script>
