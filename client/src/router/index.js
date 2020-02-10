import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/contact/add',
    name: 'AddContact',
    component: ()=> import('@/components/_includes/addContactForm')
  },
  {
    path: '/contact/edit/:id',
    name: 'EditContact',
    component: ()=> import('@/components/_includes/editContactForm')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
