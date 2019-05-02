import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Categories from './views/Categories.vue'
import Expenses from './views/Expenses.vue'
import VueChartJS from '@/views/VueChartJS'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
   {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
     {
      path: '/charts',
      name: 'VueChartJS',
      component: VueChartJS
    }
    ]
})
