import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import saved from '@/views/saved'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/saved',
      name: 'saved',
      component: saved
    },
  ]
})
