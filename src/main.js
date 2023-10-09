import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CircularCountDownTimer from 'vue-circular-count-down-timer';

const app = createApp(App)

app.use(createPinia())
app.use(router)
    .use(CircularCountDownTimer)
app.mount('#app')
