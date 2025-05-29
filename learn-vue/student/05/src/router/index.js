import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/ui'),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue'),
      name: 'Home',
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue'),
      name: 'About',
    },
    {
      // 숫자만 허용하는 정규식
      path: '/order/:id(\\d+)',
      component: () => import('../views/OrderView.vue'),
      name: 'Order',
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/dashboard/DashboardHomeView.vue'),
        },
        {
          path: 'setting',
          component: () => import('../views/dashboard/DashboardSettingView.vue'),
        },
      ],
    },
    {
      // 모든 경로 허용
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
      name: 'NotFound',
    },
  ],
})

export default router
