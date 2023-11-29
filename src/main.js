import './styles/sass/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from "vue-gtag";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueGtag, {
  config: { id: "G-YC5SEDKQL5" }
}, router);
app.use(createPinia())
app.use(router)

app.mount('#app')
