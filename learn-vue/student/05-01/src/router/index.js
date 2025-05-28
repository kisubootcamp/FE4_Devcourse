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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// 전역 가드 (Global Guard)
// 라우트 전환 전, 라우트 확정 전, 라우트 전환 후
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

// 라우트 확정 전
router.beforeResolve((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

// 라우트 전환 후
router.afterEach((to, from, failure) => {
  console.log(to)
  console.log(from)
  console.log(failure) // 라우트 전환 실패 시 발생, 라우트 전환 실패 시 발생하는 이유를 알려줌
})

export default router
