import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'

import Users from './components/user/Users.vue'

import Rights from './components/power/Rights.vue'
import Roles from './components/power/Roles.vue'

import Cate from './components/goods/Cate.vue'
import Params from './components/goods/Params.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        //重定向路由规则 如果用户访问/地址时，我们通过redirect重定向到/login地址
        { path: '/', redirect: '/login' },
        //路由规则 当用户访问/login地址时，我们通过component指定要展示的组件Login
        { path: '/login', component: Login },

        {
            path: '/home',
            component: Home,
            //重定向到/welcome地址
            redirect: '/welcome',
            //Home的子路由
            children: [
                { path: '/welcome', component: Welcome },
                { path: '/users', component: Users },
                { path: '/rights', component: Rights },
                { path: '/roles', component: Roles },
                { path: '/categories', component: Cate },
                { path: '/params', component: Params },
            ]
        }
    ]
})

//为路由对象router挂载beforeEach路由导航守卫
router.beforeEach((to, from, next) => {
    //to 代表将要访问的路径
    //form 代表从哪个路径跳转而来
    //next 是一个函数,表示放行
    // next()放行    next('/login) 强制跳转

    //如果用户访问登录页，不需要做权限控制，直接放行
    if (to.path === '/login') return next()

    //从sessionStorage中获取保存的token值
    const tokenStr = window.sessionStorage.getItem('token')

    //如果token不存在时，强制跳转到登录页
    if (!tokenStr) return next('/login')
    //token存在时直接放行
    next()
})

export default router
