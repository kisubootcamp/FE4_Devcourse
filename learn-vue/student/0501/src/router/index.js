import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '', // router 를 결정할 부분
      name: 'home', // home
      component: HomeView,
    },
    {
      path: '/about', // router 를 결정할 부분
      name: 'about', // home
      // 지연된 로딩 기법, 처음 홈에 들어갔을 때 바로 about 을 부르지 않음 (network에서 확인 가능)
      // component: () => import('../views/AboutView.vue'),
      components: {
        header: () => import('@/views/DetailView.vue'),
        footer: () => import('@/views/dashboard/DashboardSettingView.vue'),
      },
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
          // '/' 중첩된 라우트에 '/'를 붙이면 해당 경로로 가지 않음
          path: 'setting',
          component: () => import('../views/dashboard/DashboardSettingView.vue'),
        },
      ],
    },
    {
      // 숫자만 받는 정규 표현식 (\\d+)
      path: '/product/:orderId(\\d+)',
      name: 'productDetail',
      component: () => import('../views/OderView.vue'),
    },
    // 동적 세그먼트
    // {
    //   // /detail
    //   // /:id
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: () => import('../views/DetailView.vue'),
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFound.vue'),
    // },
    // {
    //   //user로 시작하는 모든 경로 Match
    //   path: '/user-:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('../views/NotFound.vue'),
    // },
  ],
})

export default router
