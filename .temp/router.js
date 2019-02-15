import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Index from '@/components/index'
import Car from '@/components/car'
import Me from '@/components/me'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
