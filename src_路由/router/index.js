import VueRouter from "vue-router";
import Page from '../pages/Page'
import Home from '../pages/Home'
import New from '../pages/New'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router= new VueRouter({
    routes:[
        {
            path:'/page',
            component:Page,
            meta:{title:'首页'}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'new',
                    component:New,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    beforeEnter:(to,from,next)=>{
                        console.log("独享守卫")
                        next()
                    },
                    children:[
                        {
                            name:'detai',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true,title:"详情"},
                            props({query}){
                                return {id:query.id}
                            }
                        }
                    ]
                }
            ]
        }
    ]
    
})
router.beforeEach((to,from,next)=>{
    console.log("前置守卫")
    if(to.meta.isAuth===true){
        if(localStorage.getItem('school')==='atguigu'){
            next()
        }else{
            alert('学校名不对,无权查看')
        }
    }
    else{
        next()
    }
})

router.afterEach((to, from) => {
    console.log("后置守卫")
    document.title=to.meta.title||'硅谷系统'
})

export default router