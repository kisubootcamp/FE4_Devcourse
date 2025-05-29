import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // /detail, /about, /detail/1, /profile/2 /user/me 일반적으로 사용하는 웹 체계를 사용하겠다
  routes: [
    {
      path: '',
      name: 'home', // 선택 속성
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: import('../views/dashboard/DashboardView.vue'),
        default: () => import('../views/AboutView.vue'),
        footer: () => import('../views/dashboard/DashboardSettingView.vue'),
      },
      props: {
        header: true,
        default: false,
        footer: true,
      },
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'), // 지연된 로딩
      children: [
        {
          path: '',
          component: () => import('../views/dashboard/DashboardHomeView.vue'),
        },
        {
          path: 'setting',
          component: () => import('../views/dashboard/DashboardSettingView.vue'),
          alias: ['/setting', 'u'],
        },
      ],
    },
    {
      path: '/product/:orderId(\\d+)',
      name: 'productDetail',
      component: () => import('../views/OrderView.vue'),
      redirect: (to) => {
        return { name: 'detail', params: { id: to.params.orderId } }
      },
    },
    // 동적 세그먼트
    {
      // http://localhost:5173/detail/2?lang=ko
      // /detail
      // /:id
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
      props: true,
    },
    {
      path: '/user-:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
