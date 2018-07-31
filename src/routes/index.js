import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from '@components/posts/posts';
import Register from '@components/authentication/register';
import Login from '@components/authentication/login';
import Home from '@components/home';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});

export default router;
