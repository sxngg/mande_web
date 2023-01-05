import UserIndex from '../components/user/UserIndex.vue'

export default {
    name: 'admin',
    component: () => import('../Admin.vue'),
    children:[
      {
        path:'user-index',
        component: UserIndex
      }
    ]
    
};




