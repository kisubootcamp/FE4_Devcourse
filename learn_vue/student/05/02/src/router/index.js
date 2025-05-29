import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // 지연된 속성
      component: () => import('../views/AboutView.vue'),
    },
    // 동적 세그먼트
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
    },

    // 숫자 동적 세그먼트 /product/1 -> ok
    // /product/shoes -> not ok, 숫자만 뒤에 올 수 있음
    {
      path: '/product/:orderId(\\d+)',
      name: 'product',
      component: () => import('../views/DetailView.vue'),
    },

    // 중첩된 라우트 기능
    {
      path: '/dashboard',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/DashboardHome.vue'),
        },
        {
          path: 'setting',
          component: () => import('../views/DashboardSetting.vue'),
        },
      ],
    },
  ],
})
export default router
