import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import Home from '../components/Home';
import userRoutes from '../app/admin/routes/index'
import UserLogin from '../app/admin/components/user/UserLogin.vue'
import UserRegister from '../app/admin/components/user/UserRegister.vue'
import WorkerLogin from '../app/admin/components/worker/WorkerLogin.vue'
import WorkerRegister from '../app/admin/components/worker/WorkerRegister.vue'
import WorkerHome from '../app/admin/components/worker/WorkerHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/user-login',
    name: 'user-login',
    component: UserLogin
  },
  
  {
    path: '/user-register',
    name: 'user-register',
    component: UserRegister
  },
  
  {
    path: '/worker-login',
    name: 'worker-login',
    component: WorkerLogin
  },

  {
    path: '/worker-register',
    name: 'worker-register',
    component: WorkerRegister
  },

  {
    path: '/worker-home',
    name: 'worker-home',
    component: WorkerHome
  }
  /** 
  {
    path: '/user-login',
    ...userRoutes
    //name: 'admin',
    //component: () => import('../app/admin/Admin.vue')
    //component: adminRoutes
    
    }*/
    
  /** 
  {
    path: '/admin',
    name: 'admin',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  }*/
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
