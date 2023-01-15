import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/sobre.vue')
    },
    {
      path: '/terapias',
      name: 'terapias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/terapias.vue'),
      children: [ 
        { path: '', name: 'indexTerapia', component:  ()=> import('../views/terapias/index.vue') },
        {path: 'acupuntura', component: ()=> import('../views/terapias/acupuntura.vue') },
        {path: 'auriculoterapia', component: ()=> import('../views/terapias/auriculoterapia.vue') },
        {path: 'craniopuntura', component: ()=> import('../views/terapias/craniopuntura.vue') },
        {path: 'ventosaterapia', component: ()=> import('../views/terapias/ventosaterapia.vue') },
    ]
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/blog/index.vue'),
    },
    {
      path: '/blog/auriculoterapia-visao-oriental-ocidental',
      name: 'blog/auriculoterapia-visao-oriental-ocidental',
      component: () => import('../views/blog/auriculoterapiaVisaoOrientalOcidental.vue'),
    },
    {
      path: '/blog/o-que-e-acupuntura',
      name: 'blog/o-que-e-acupuntura',
      component: () => import('../views/blog/oQueEAcupuntura.vue'),
    },
    {
      path: '/blog/lombalgia-tai-yang',
      name: 'blog/lombalgia-tai-yang',
      component: () => import('../views/blog/lombalgiaTaiYang.vue'),
    },
  ]
})

export default router
