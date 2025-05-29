import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashBoardView.vue'),
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
      path: '/product/:orderId(\\d+)',
      name: 'productDetail',
      component: () => import('../views/OrderView.vue'),
    },
    // 동적 세그먼트
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: () => import('../views/DetailView.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFound.vue'),
    // },
  ],
})

export default router
