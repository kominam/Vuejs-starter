import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '@components/posts/posts'
import Home from '@components/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})

export default router
