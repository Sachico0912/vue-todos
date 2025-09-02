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
      path: '/Week1',
      name: 'week1',
      component: () => import('../views/Week1View.vue'),
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('../views/ReviewView.vue'),
    },
    {
      path: '/Week2',
      name: 'week2',
      component: () => import('../views/Week2View.vue'),
    },
    {
      path: '/review2',
      name: 'review2',
      component: () => import('../views/Review2View.vue'),
    },
    {
      path: '/Week3',
      name: 'week3',
      component: () => import('../views/Week3View.vue'),
    },
    {
      path: '/Task',
      name: 'task',
      component: () => import('../views/TaskView.vue'),
    },
  ],
})

export default router
