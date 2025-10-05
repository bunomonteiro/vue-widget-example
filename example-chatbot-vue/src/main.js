import './assets/main.css'
import './assets/lib/chatbot.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ChatbotPlugin } from './assets/lib/chatbot.es'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ChatbotPlugin)

app.mount('#app')
