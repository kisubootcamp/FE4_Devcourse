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

// 전역가드 (Global Guard)
// 모든 route 에 공통으로 적용되는 것
// route 전환 전 , route 확정 전, route 전환 후
router.beforeEach((to, from, next) => {
  next()
  console.log(to)
  console.log(from)
})

router.beforeResolve((to, from, next) => {
  next()
  console.log(to)
  console.log(from)
})

router.afterEach((to, from, failure) => {
  console.log(to)
  console.log(from)
  console.log(failure)
})

export default router
