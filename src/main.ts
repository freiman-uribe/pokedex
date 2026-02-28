import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import router from './router/routes.ts'
import './style.css'
import App from './App.vue'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
.use(router)
.use(pinia)
.mount("#app");
