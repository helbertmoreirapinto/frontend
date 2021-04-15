import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Exam from '../views/Exam.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      window.localStorage.removeItem('userId')
      next()
    },
  },
  {
    path: '/exam',
    name: 'Exam',
    beforeEnter: (to, from, next) => {
      let userId = window.localStorage.getItem('userId')
      if (userId) {
        next()
      }else{
        next('/')
      }
      
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Exam
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
