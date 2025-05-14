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
        }
      ]
    },
  ],
})

export default router
