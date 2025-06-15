import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // @ts-ignore
    component: () => import('../views/Tag.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router