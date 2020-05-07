import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录
// import Login from './components/Login'
// 主页
// import Home from './components/Home'
// 首页
// import Welcome from './components/Welcome'
const Login = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Welcome.vue')

// 用户管理
// import Users from './components/user/Users'
// 权限管理
// import Rights from './components/power/Rights'
// import Roles from './components/power/Roles'
const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ './components/user/Users.vue')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ './components/power/Rights.vue')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ './components/power/Roles.vue')

// 商品管理
// import Cate from './components/goods/Cate'
// import Params from './components/goods/Params'
const Cate = () => import(/* webpackChunkName: "Cate_Params" */ './components/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ './components/goods/Params.vue')

// import GoodsList from './components/goods/List'
// import Add from './components/goods/Add'
const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ './components/goods/List.vue')
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ './components/goods/Add.vue')


// 订单管理 
// import Order from './components/order/Order'
// import Report from './components/report/Report'
const Order = () => import(/* webpackChunkName: "Order_Report" */ './components/order/Order.vue')
const Report = () => import(/* webpackChunkName: "Order_Report" */ './components/report/Report.vue')


Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',redirect:'/login'
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },{
            path:'/home',
            name:'home',
            component:Home,
            redirect:'/welcome',
            children:[
                {
                    path:'/welcome',
                    name:'welcome',
                    component:Welcome
                },
                {
                    path:'/users',
                    name:'users',
                    component:Users
                },
                {
                    path: '/rights',
                    name:'rights',
                    component:Rights
                },
                {
                    path: '/roles',
                    name:'roles',
                    component:Roles
                },
                {
                    path:'/categories',
                    name:'categories',
                    component:Cate
                },
                {
                    path:'/params',
                    name:'params',
                    component:Params
                },
                {
                    path:'/goods',
                    name:'goods',
                    component:GoodsList
                },
                {
                    path:'/goods/add',
                    name:'add',
                    component:Add
                },
                {
                    path:'/orders',
                    name:'orders',
                    component:Order
                },
                {
                    path:'/reports',
                    name:'reports',
                    component:Report
                }
            ]
        }
    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to将要访问的路径
    // from代表从哪个路径跳转而来
    // next是一个函数，表示放行
    //   next() 放行 next('/login') 强制跳转
    if(to.path === '/login') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    next()
})

export default router