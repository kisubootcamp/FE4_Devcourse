import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
;('vue-router')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      //name (optional)
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: import('../views/dashboard/DashboardHomeView.vue'),
        default: () => import('../views/AboutView.vue'),
        footer: import('../views/dashboard/DashboardSettingView.vue'),
      },
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        {
          path: '',
          component: import('../views/dashboard/DashboardHomeView.vue'),
        },
        {
          // 중첩된 라우트는 앞에 /를 넣으면 안됨
          path: 'setting', // dashboard/setting
          component: import('../views/dashboard/DashboardSettingView.vue'),
        },
      ],
    },
    // product/1 product/2 ... ok
    // product/bag product/shoes --- not ok
    {
      path: '/product/:orderId(\\d+)',
      name: 'productDetail',
      component: () => import('../views/OrderView.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
      props: true,
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFound.vue'),
    // },
  ],
})

export default router
