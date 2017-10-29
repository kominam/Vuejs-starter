import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '@components/posts/posts'

Vue.use(VueRouter)

const Home = { template: '<div>This is Homepage</div>' }

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
