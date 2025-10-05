import { createApp } from 'vue';
import Chatbot from './components/Chatbot.vue';

// Instala como plugin para uso com app.use(...)
const ChatbotPlugin = {
  install: function(app, options) {
    console.log('Instalando Chatbot...')
    app.component(options?.tag || 'Chatbot', Chatbot)
    console.log('Chatbot instalado')
  }
}

// Função de instalação direta para uso com script tag
function install(targetSelector, options) {
  console.log('Instalando Chatbot...')
  const app = createApp({
    components: { 
      [options?.tag || 'Chatbot']: Chatbot
    },
  })
  app.mount(targetSelector)
  console.log('Chatbot instalado')
  return app;
}

// Exportação direta para uso com import individual
export { Chatbot, install, ChatbotPlugin }