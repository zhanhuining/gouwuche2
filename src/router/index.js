import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/main.vue'),
    children:[
      {
        path: '/shopcart',
        name: 'shopcart',
        component: () => import(/* webpackChunkName: "shopcart" */ '../views/shop-cart.vue')
      },
      {
        path: '/shoplist',
        name: 'shoplist',
        component: () => import(/* webpackChunkName: "shoplist" */ '../views/shop-list.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
