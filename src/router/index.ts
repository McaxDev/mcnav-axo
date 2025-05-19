import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layout/MainLayout.vue'),
      children: [
        {
          path: '', // 默认路由
          name: 'Home',
          component: () => import('../views/MainLayout/Home.vue')
        },
        {
          path: '/server', // 默认路由
          name: 'Server',
          component: () => import('../views/MainLayout/Server.vue')
        },
        {
          path: '/about', // 默认路由
          name: 'About',
          component: () => import('../views/MainLayout/About.vue')
        },
        {
          path: '/vip', // 默认路由
          name: 'vip',
          component: () => import('../views/MainLayout/vip.vue')
        },
        {
          path: '/consumption', // 默认路由
          name: 'consumption',
          component: () => import('../views/MainLayout/consumption.vue')
        },
        {
          path: '/gift', // 默认路由
          name: 'gift',
          component: () => import('../views/MainLayout/gift.vue')
        }
      ]
    },
  ],
})

export default router
