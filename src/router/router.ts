import Vue from 'vue'
import Router from 'vue-router'
import Home from '../layouts/Home.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
                },
                {
                    path: '/message',
                    name: 'message',
                    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
                },
                {
                    path: '/goodsList', // 商品列表
                    name: 'List',
                    component: () => import(/* webpackChunkName: "about" */ '../views/Goods/List.vue')
                },
                {
                    path: '/goodsDetail', // 基础信息
                    name: 'Detail',
                    component: () => import(/* webpackChunkName: "about" */ '../views/Goods/Detail.vue')
                }
            ]
        }
    ]
})
