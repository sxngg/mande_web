import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import boot from './assets/styles/_themer.scss';

createApp(App).use(store).use(router).use(boot).mount('#app')
