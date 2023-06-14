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
                            path:'detail',
                            component:MessageDetail
                        }
                    ]
                },
            ]
        }
    ]
})

