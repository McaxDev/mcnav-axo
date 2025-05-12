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
          component: () => import('../views/HomeView.vue') // 示例页面
        }
      ]
    },
  ],
})

export default router
