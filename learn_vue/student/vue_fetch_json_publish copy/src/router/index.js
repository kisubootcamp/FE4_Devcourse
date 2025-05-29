import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      // post뒤에 숫자만 들어올 수 있도록 설정
      path: '/post/:id(\\d+)',
      name: 'post-detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostDetailView.vue'),
    },
    {
      // 이상한 경로로 접근했을 때
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => '../views/NotFound.vue',
    },
  ],
})

export default router
