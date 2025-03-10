import { createApp } from 'vue'
import App from './App.vue'
import router from '../server/router/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
