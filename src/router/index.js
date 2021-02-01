/* eslint-disable */
import Vue from 'vue'
import VRouter from 'vue-router'
import Main from '@/components/Main'
import News from '@/components/News'
import Home from '@/components/Home'
import User from '@/components/User'
import HelloWorld from '@/components/HelloWorld'
import Content from '@/components/Content'
import Todos from '@/components/Todos'
import axios from 'axios';

Vue.use(VRouter)



export default new VRouter({
  mode:'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },{
      path: '/news',
      name: 'News',
      component: News
    },{
      path: '/content/:aid',
      name: 'Content',
      component: Content
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'helloworld',
          component: HelloWorld
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: HelloWorld
        }
      ]
    },{
      path: '*',
      redirect: '/main'
    }
  ]
})
