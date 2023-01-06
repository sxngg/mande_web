//import UserIndex from '../components/user/UserIndex.vue'

export default {
    name: 'user',
    component: () => import('../components/user/UserLogin.vue'),
    children:[
      /** aqui irian las rutas hijas de user como user-listar user-delete
       {
        path:'user-index',
        component: UserIndex
      }*/
    ]
    
};




