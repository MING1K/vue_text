export default {
    install(Vue,x,y,z){
        console.log(x,y,z);
        console.log('@@@install',Vue);

        // 全局过滤器（写在Vue实例前）
        Vue.filter('myslice',function(value){
            return value.slice(0,4)
        })

        // 定义全局指令
        Vue.directive('fbind2',{
            // 指令与元素成功绑定时（一上来）
            bind(element,binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            // 指令所在模板被重新解析时
            update(element,binding){
                element.value = binding.value
                // element.focus()
            }
        })

        //定义混入
        Vue.mixin({
            showName(){
                alert(this.name)
            },
            data() {
                return {
                    x:10,
                    y:11,
                }
            },
        })

        // 给Vue原型上添加一个方法（vm和vc都能用）
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}