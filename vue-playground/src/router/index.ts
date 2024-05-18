import { createRouter, createWebHistory } from 'vue-router';
import StartView from '@views/StartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/inline',
      name: 'inline',
      component: () => import('@views/InlineView.vue')
    },
    {
      path: '/function',
      name: 'function',
      component: () => import('@views/FunctionView.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('@views/ComponentView.vue')
    }
  ]
})

export default router
