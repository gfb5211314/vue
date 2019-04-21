import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index/index'
import car from '@/page/car/car'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component:  HelloWorld
    
    },
    {
      path: '/car',
      name: 'car',
      component: car
    
    }
  ]
})
