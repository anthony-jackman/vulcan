import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
import ClassroomTrngPage from '@/pages/ClassroomTrngPage.vue';
import OnlineTrngPage from '@/pages/OnlineTrngPage.vue';
import MobileAppsPage from '@/pages/MobileAppsPage.vue';
import NavyTrngPage from '@/pages/NavyTrngPage.vue';
import QACECpage from '@/pages/QACECPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: ClassroomTrngPage
    },
    {
      path: '/online',
      name: 'online',
      component: OnlineTrngPage
    },
    {
      path: '/mobileapps',
      name: 'mobileapps',
      component: MobileAppsPage
    },
    {
      path: '/navytrng',
      name: 'navytrng',
      component: NavyTrngPage
    },
    {
      path: '/qacec',
      name: 'qacec',
      component: QACECpage
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/pages/FAQPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]
})

export default router
