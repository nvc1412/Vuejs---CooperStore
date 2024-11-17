import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import router from './routers';

createApp(App).use(vuetify).use(router).mount('#app');
