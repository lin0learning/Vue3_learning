import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 1. 创建路由实例
const router = createRouter({
    // 2. 指定模式
    // 2.1 Hash 模式
    history: createWebHashHistory(),
    // history: createWebHistory()
    // 3. 映射关系
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            name: "home",
            path: "/home",
            component: () => import("../view/Home.vue"),
            children: [
                {
                    path: "/home",
                    redirect: "/home/recommend"
                },
                {
                    path: "recommend", // home/recommend
                    component: () => import("../view/HomeRecommend.vue")
                },
                {
                    path: "ranking",
                    component: () => import("../view/HomeRanking.vue")
                }
            ]
        },
        {
            path: "/about",
            component: () => import("../view/About.vue"),
            children: [
                {
                    path: "/user/:id",
                    component: () => import("../view/User.vue")
                }
            ]
        },
        {
            path: "/order",
            component: () => import("../view/Order.vue")
        },
        {
            path: "/login",
            component: () => import("../view/Login.vue")
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import("../view/NotFound.vue")
        }
    ]
})

// 1. 动态管理路由
let isAdmin = true
if (isAdmin) {
    // 一级路由
    router.addRoute({
        path: "/admin",
        component: () => import("../view/Admin.vue")
    })
    router.addRoute("home",{
        path: "vip",
        component: () => import("../view/homeVip.vue")
    })
}
// 获取router中所有的映射路由对象
// console.log(router.getRoutes())

// 2. 路由导航守卫
router.beforeEach((to, from) => {
    // 1.进入到任何别的页面时, 都跳转到login页面
    // if (to.path !== "/login") {
    //     return "/login"
    // }

    // 2. 进入搭配订单页面，判断是否登录
    const token = localStorage.getItem("token")
    if (to.path === "/order" && !token) {
        return "/login"
    }
})
export default router