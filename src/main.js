import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);

import '@unocss/reset/normalize.css';
import 'uno.css';
import './assets/css/style.css';

app.use(createPinia());
app.use(router);
app.mount('#app');