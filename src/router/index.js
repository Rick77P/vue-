import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login/login'
import home from '../components/home/home'
import practice from '../components/practice/shoppingMall'
import practice1 from '../components/practice/practice1'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/library',
      name:'library',
    },
    {
      path:'/practice',
      name:'practice',
      component:practice
    },
    {
      path:'/practice1',
      name:'practice1',
      component:practice1
    }
  ]
})
