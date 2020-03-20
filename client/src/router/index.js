import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: Landing },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})
