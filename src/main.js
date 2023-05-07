import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask'
import 'sweetalert2/dist/sweetalert2.min.css';


createApp(App).use(VueTheMask).use(router).use(VueSweetalert2).mount('#app');