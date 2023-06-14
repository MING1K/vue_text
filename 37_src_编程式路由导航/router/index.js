// 该文件专门用于创建整个应用的路由器.

// 引入VueRouter
import VueRouter from "vue-router";
// 引入组件
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'
import MessageDetail from '../pages/MessageDetail'

// 创建并暴露一个路由器，去管理一组一组的路由规则
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:AboutPage
        },
        {
            path:'/home',
            component:HomePage,
            children:[
                {
                    path:'news',
                    component:HomeNews
                },
                {
                    path:'message',
                    component:HomeMessage,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:MessageDetail,

                            // props的第一种写法：值为对象，该对象中的所有key-value都会以props的形式传给MessageDetail组件
                            // props:{a:1,b:'hello'}

                            // props的第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给MessageDetail组件
                            // path:'detail/:id/:title/:info',
                            // props:true

                            // props的第三种写法：值为函数，该函数返回的对象中每一组key-value都会通过props传给MessageDetails组件
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                    info:$route.query.info
                                }
                            },
                            /* props({query}){
                                return {id:query.id,title:query.title,info:query.info}
                            },
                            props({query:{id,title,info}}){
                                return {id,title,info}
                            }, */
                        }
                    ]
                },
            ]
        }
    ]
})

