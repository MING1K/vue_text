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
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:AboutPage,
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:HomePage,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:HomeNews,
                    meta:{isAuth:true,title:'新闻'},
/*                     beforeEnter:(to,from,next)=>{
                        console.log('独享路由守卫',to,from);
                        if(to.meta.isAuth){ // 判断是否需要鉴权
                            if(localStorage.getItem('check')==='yes'){
                                next()
                            }
                            else{
                                alert('check is not yes, you cannot see it')
                            }
                        }
                        else{
                            next()
                        }
                    } */
                },
                {
                    path:'message',
                    component:HomeMessage,
                    meta:{isAuth:true,title:'消息'},
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

// 测试用
localStorage.setItem('check','yes')

// 全局前置路由守卫————初始化的时候、每次路由切换之前被调用
/* router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from);
    //if(to.name === 'xinwen' || to.path==='/home/message'){
    if(to.meta.isAuth){ // 判断是否需要鉴权
        if(localStorage.getItem('check')==='yes'){
            next()
        }
        else{
            alert('check is not yes, you cannot see it')
        }
    }
    else{
        next()
    }
}) */

// 全局后置路由守卫————初始化的时候、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from);
    document.title = to.meta.title || '系统'
})

export default router
