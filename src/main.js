import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import boot from './assets/styles/_themer.scss';
import Toaster from "@meforma/vue-toaster";

createApp(App).use(store).use(router).use(boot).use(Toaster).mount('#app')
