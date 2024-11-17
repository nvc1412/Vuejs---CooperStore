import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import './assets/main.css';
import router from './routers';

createApp(App).use(vuetify).use(router).mount('#app');
