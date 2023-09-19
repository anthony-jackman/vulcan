import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue';
import ClassroomTrngPage from '@/pages/ClassroomTrngPage.vue';
import OnlineTrngPage from '@/pages/OnlineTrngPage.vue';
// import MobileAppsPage from '@/pages/MobileAppsPage.vue';
import NavyTrngPage from '@/pages/NavyTrngPage.vue';
// import QACECpage from '@/pages/QACECPage.vue';
// import COPpage from '@/pages/CommPracticePage.vue';


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
      path: '/classroom/ammo01',
      name: 'ammo01',
      // component: ammo01page
      component: () => import('@/pages/courses/ammo01.vue')
    },
    {
      path: '/classroom/ammo04',
      name: 'ammo04',
      component: () => import('@/pages/courses/ammo04.vue')
    },
    {
      path: '/classroom/ammo12',
      name: 'ammo12',
      component: () => import('@/pages/courses/ammo12.vue')
    },
    {
      path: '/classroom/ammo14',
      name: 'ammo14',
      component: () => import('@/pages/courses/ammo14.vue')
    },
    {
      path: '/classroom/ammo28',
      name: 'ammo28',
      component: () => import('@/pages/courses/ammo28.vue')
    },
    {
      path: '/classroom/ammo29',
      name: 'ammo29',
      component: () => import('@/pages/courses/ammo29.vue')
    },
    {
      path: '/classroom/ammo33',
      name: 'ammo33',
      component: () => import('@/pages/courses/ammo33.vue')
    },
    {
      path: '/classroom/ammo36',
      name: 'ammo36',
      component: () => import('@/pages/courses/ammo36.vue')
    },
    {
      path: '/classroom/ammo38',
      name: 'ammo38',
      component: () => import('@/pages/courses/ammo38.vue')
    },
    {
      path: '/classroom/ammo43',
      name: 'ammo43',
      component: () => import('@/pages/courses/ammo43.vue')
    },
    {
      path: '/classroom/ammo47',
      name: 'ammo47',
      component: () => import('@/pages/courses/ammo47.vue')
    },
    {
      path: '/classroom/ammo51mv',
      name: 'ammo51mv',
      component: () => import('@/pages/courses/ammo51mv.vue')
    },
    {
      path: '/classroom/ammo51mvrc',
      name: 'ammo51mvrc',
      component: () => import('@/pages/courses/ammo51mvrc.vue')
    },
    {
      path: '/classroom/ammo54',
      name: 'ammo54',
      component: () => import('@/pages/courses/ammo54.vue')
    },
    {
      path: '/classroom/ammo60',
      name: 'ammo60',
      component: () => import('@/pages/courses/ammo60.vue')
    },
    {
      path: '/classroom/ammo62',
      name: 'ammo62',
      component: () => import('@/pages/courses/ammo62.vue')
    },
    {
      path: '/classroom/ammo74',
      name: 'ammo74',
      component: () => import('@/pages/courses/ammo74.vue')
    },
    {
      path: '/classroom/ammo82',
      name: 'ammo82',
      component: () => import('@/pages/courses/ammo82.vue')
    },
    {
      path: '/classroom/pack1b',
      name: 'pack1b',
      component: () => import('@/pages/courses/pack1b.vue')
    },
    {
      path: '/mobileapps',
      name: 'mobileapps',
      component: () => import('@/pages/MobileAppsPage.vue')
    },
    {
      path: '/navytrng',
      name: 'navytrng',
      component: NavyTrngPage
    },
    {
      path: '/commpractice',
      name: 'commpract',
      component: () => import('@/pages/CommPracticePage.vue')
    },
    {
      path: '/online',
      name: 'online',
      component: OnlineTrngPage
    },
    {
      path: '/online/ammo10dl',
      name: 'ammo10dl',
      component: () => import('@/pages/courses/ammo10dl.vue')
    },
    {
      path: '/online/ammo18dl',
      name: 'ammo18dl',
      component: () => import('@/pages/courses/ammo18dl.vue')
    },
    {
      path: '/online/ammo28dl',
      name: 'ammo28dl',
      component: () => import('@/pages/courses/ammo28dl.vue')
    },
    {
      path: '/online/ammo29dl',
      name: 'ammo29dl',
      component: () => import('@/pages/courses/ammo29dl.vue')
    },
    {
      path: '/online/ammo31dl',
      name: 'ammo31dl',
      component: () => import('@/pages/courses/ammo31dl.vue')
    },
    {
      path: '/online/ammo36dl',
      name: 'ammo36dl',
      component: () => import('@/pages/courses/ammo36dl.vue')
    },
    {
      path: '/online/ammo37dl',
      name: 'ammo37dl',
      component: () => import('@/pages/courses/ammo37dl.vue')
    },
    {
      path: '/online/ammo43dl',
      name: 'ammo43dl',
      component: () => import('@/pages/courses/ammo43dl.vue')
    },
    {
      path: '/online/ammo45dl',
      name: 'ammo45dl',
      component: () => import('@/pages/courses/ammo45dl.vue')
    },
    {
      path: '/online/ammo47dl',
      name: 'ammo47dl',
      component: () => import('@/pages/courses/ammo47dl.vue')
    },
    {
      path: '/online/ammo49dl',
      name: 'ammo49dl',
      component: () => import('@/pages/courses/ammo49dl.vue')
    },
    {
      path: '/online/ammo51mvdl',
      name: 'ammo51mvdl',
      component: () => import('@/pages/courses/ammo51mvdl.vue')
    },
    {
      path: '/online/ammo51rcdl',
      name: 'ammo51rcdl',
      component: () => import('@/pages/courses/ammo51rcdl.vue')
    },
    {
      path: '/online/ammo54dl',
      name: 'ammo54dl',
      component: () => import('@/pages/courses/ammo54dl.vue')
    },
    {
      path: '/online/ammo63dl',
      name: 'ammo63dl',
      component: () => import('@/pages/courses/ammo63dl.vue')
    },
    {
      path: '/online/ammo64dl',
      name: 'ammo64dl',
      component: () => import('@/pages/courses/ammo64dl.vue')
    },
    {
      path: '/online/ammo66dl',
      name: 'ammo66dl',
      component: () => import('@/pages/courses/ammo66dl.vue')
    },
    {
      path: '/online/ammo67dl',
      name: 'ammo67dl',
      component: () => import('@/pages/courses/ammo67dl.vue')
    },
    {
      path: '/online/ammo68dl',
      name: 'ammo68dl',
      component: () => import('@/pages/courses/ammo68dl.vue')
    },
    {
      path: '/online/ammo75dl',
      name: 'ammo75dl',
      component: () => import('@/pages/courses/ammo75dl.vue')
    },
    {
      path: '/online/ammo76dl',
      name: 'ammo76dl',
      component: () => import('@/pages/courses/ammo76dl.vue')
    },
    {
      path: '/online/ammo78dl',
      name: 'ammo78dl',
      component: () => import('@/pages/courses/ammo78dl.vue')
    },
    {
      path: '/online/ammo97dl',
      name: 'ammo97dl',
      component: () => import('@/pages/courses/ammo97dl.vue')
    },
    {
      path: '/online/ammo99dl',
      name: 'ammo99dl',
      component: () => import('@/pages/courses/ammo99dl.vue')
    },
    {
      path: '/online/ammo100dl',
      name: 'ammo100dl',
      component: () => import('@/pages/courses/ammo100dl.vue')
    },
    {
      path: '/online/ammo107dl',
      name: 'ammo107dl',
      component: () => import('@/pages/courses/ammo107dl.vue')
    },
    {
      path: '/online/ammo108dl',
      name: 'ammo108dl',
      component: () => import('@/pages/courses/ammo108dl.vue')
    },
    {
      path: '/online/ammo112dl',
      name: 'ammo112dl',
      component: () => import('@/pages/courses/ammo112dl.vue')
    },
    {
      path: '/online/pack1adl',
      name: 'pack1adl',
      component: () => import('@/pages/courses/pack1adl.vue')
    },
    {
      path: '/qacec',
      name: 'qacec',
      component: () => import('@/pages/QACECPage.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@/pages/FAQPage.vue')
    },
    {
      path: '/navytrngsites/20srgGulfport',
      name: '20srgGulfport',
      component: () => import('@/pages/locations/20srgGulfport.vue')
    },
    {
      path: '/navytrngsites/dacMcAlester',
      name: 'dacMcAlester',
      component: () => import('@/pages/locations/dacMcAlester.vue')
    },
    {
      path: '/navytrngsites/ewtglantLittleCreek',
      name: 'ewtglantLittleCreek',
      component: () => import('@/pages/locations/ewtglantLittleCreek.vue')
    },
    // {
    //   path: '/navytrngsites/fltactYokosuka',
    //   name: 'fltactYokosuka',
    //   component: () => import('@/pages/locations/fltactYokosuka.vue')
    // },
    {
      path: '/navytrngsites/mcagc29Palms',
      name: 'mcagc29Palms',
      component: () => import('@/pages/locations/mcagcc29Palms.vue')
    },
    {
      path: '/navytrngsites/mcasCherryPoint',
      name: 'mcasCherryPoint',
      component: () => import('@/pages/locations/mcasCherryPoint.vue')
    },
    {
      path: '/navytrngsites/mcasMiramar',
      name: 'mcasMiramar',
      component: () => import('@/pages/locations/mcasMiramar.vue')
    },
    {
      path: '/navytrngsites/mcasPendleton',
      name: 'mcasPendleton',
      component: () => import('@/pages/locations/mcasPendleton.vue')
    },
    {
      path: '/navytrngsites/mcbPendleton',
      name: 'mcbPendleton',
      component: () => import('@/pages/locations/mcbPendleton.vue')
    },
    {
      path: '/navytrngsites/mcbhKaneoheBay',
      name: 'mcbhKaneoheBay',
      component: () => import('@/pages/locations/mcbhKaneoheBay.vue')
    },
    {
      path: '/navytrngsites/navairfacElCentro',
      name: 'navairfacElCentro',
      component: () => import('@/pages/locations/navairfacElCentro.vue')
    },
    {
      path: '/navytrngsites/navairstaJacksonville',
      name: 'navairstaJacksonville',
      component: () => import('@/pages/locations/navairstaJacksonville.vue')
    },
    {
      path: '/navytrngsites/navairstaOceana',
      name: 'navairstaOceana',
      component: () => import('@/pages/locations/navairstaOceana.vue')
    },
    {
      path: '/navytrngsites/navairstaSigonella',
      name: 'navairstaSigonella',
      component: () => import('@/pages/locations/navairstaSigonella.vue')
    },
    {
      path: '/navytrngsites/navairstaWhidbeyIs',
      name: 'navairstaWhidbeyIs',
      component: () => import('@/pages/locations/navairstaWhidbeyIs.vue')
    },
    {
      path: '/navytrngsites/navairwpnstaChinaLake',
      name: 'navairwpnstaChinaLake',
      component: () => import('@/pages/locations/navairwpnstaChinaLake.vue')
    },
    {
      path: '/navytrngsites/navbaseGuam',
      name: 'navbaseGuam',
      component: () => import('@/pages/locations/navbaseGuam.vue')
    },
    {
      path: '/navytrngsites/navbaseSanDiego',
      name: 'navbaseSanDiego',
      component: () => import('@/pages/locations/navbaseSanDiego.vue')
    },
    {
      path: '/navytrngsites/navmagIndianIsland',
      name: 'navmagIndianIsland',
      component: () => import('@/pages/locations/navmagIndianIsland.vue')
    },
    {
      path: '/navytrngsites/navstaNorfolk',
      name: 'navstaNorfolk',
      component: () => import('@/pages/locations/navstaNorfolk.vue')
    },
    {
      path: '/navytrngsites/navstaRota',
      name: 'navstaRota',
      component: () => import('@/pages/locations/navstaRota.vue')
    },
    {
      path: '/navytrngsites/navsupactBahrain',
      name: 'navsupactBahrain',
      component: () => import('@/pages/locations/navsupactBahrain.vue')
    },
    {
      path: '/navytrngsites/navsupactNaples',
      name: 'navsupactNaples',
      component: () => import('@/pages/locations/navsupactNaples.vue')
    },
    {
      path: '/navytrngsites/navwpnstaCharleston',
      name: 'navwpnstaCharleston',
      component: () => import('@/pages/locations/navwpnstaCharleston.vue')
    },
    {
      path: '/navytrngsites/navwpnstaSealBeach',
      name: 'sealbeach',
      component: () => import('@/pages/locations/navwpnstaSealBeach.vue')
    },
    {
      path: '/navytrngsites/nuwcKeyport',
      name: 'nuwcKeyport',
      component: () => import('@/pages/locations/nuwcKeyport.vue')
    },
    {
      path: '/navytrngsites/okinawa',
      name: 'okinawa',
      component: () => import('@/pages/locations/okinawa.vue')
    },
    {
      path: '/navytrngsites',
      name: 'navytrngsites',
      component: () => import('@/pages/NavyTrainingSitesPage.vue')
    },
    {
      path: '/privacy',
      name: 'privacy-security',
      component: () => import('@/pages/PrivacyPage.vue')
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: () => import('@/pages/AccessibilityPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/pages/NotFoundPage.vue')
    }
  ]
})

export default router
