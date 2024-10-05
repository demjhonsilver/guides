import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';



import App from './App.vue'
import router from './router';


createApp(App).use(router).mount('#app');