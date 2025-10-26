// createRouter：创建路由实例
// createWebHistory：创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Details/index.vue'
import CarList from '@/views/CarList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {path:'/',
      component:Layout,
      children:[
      {
        path:'',
        name:'home',
        component:Home
      },
      {
        path:'Category/:id',
        name:'category',
        component:Category
      },
      {
        path:'Category/sub/:id',
        name:'subcategory',
        component:SubCategory
      },
      {
        path:'detail/:id',
        name:'detail',
        component:Detail
      },
      {
        path:'carlist',
        name:'carlist',
        component:CarList
      },
      {
        path:'checkout',
        name:'checkout',
        component:Checkout
      },
      {
        path:'pay',
        name:'pay',
        component:Pay
      },
      {
        path:'member',
        name:'member',
        component:Member,
        children:[
          {
            path:'',
            name:'user',
            component:UserInfo

          },
          {
            path:'order',
            name:'order',
            component:UserOrder

          },
        ]
      },
      
      
     
      ]
     

    },
    {path:'/login',
      name:'login',
      component:Login

    }
  ],
  // 路由滚动行为定制
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
