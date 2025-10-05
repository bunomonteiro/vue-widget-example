<script setup>
import { ref } from 'vue';

const open = ref(false);
const input = ref('');
const messages = ref([
  { from: 'Zoe', text: 'Olá! Como posso ajudar?' }
]);

function sendMessage() {
  if (!input.value.trim()) return;
  messages.value.push({ from: 'você', text: input.value });

  // Simulando resposta do bot
  setTimeout(() => {
    messages.value.push({ from: 'Zoe', text: 'Essa é uma resposta automática.' });
  }, 1000);

  input.value = '';
}
</script>

<template>
  <div class="chat-widget">
    <div v-if="open" class="chat-window">
      <div class="header">
        <img alt="avatar" src="https://i.pravatar.cc/50" />
        <div>
          <p><small>Chat with</small></p>
          <h3>Zoe</h3>
        </div>
      </div>
      <div class="messages">
        <div v-for="(msg, index) in messages" :key="index" class="message">
          <strong>{{ msg.from }}:</strong> {{ msg.text }}
        </div>
      </div>
      
      <div class="input-box">
        <input id="chatbot-input-text" v-model="input" @keydown.enter="sendMessage" placeholder="Digite algo..." />
      </div>
    </div>
    <button class="chat-toggle" @click="open = !open">
      <img alt="Toggle chat" src="@/assets/chat-square.svg" />
    </button>
  </div>
</template>

<style scoped>
.chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-family: sans-serif;

  .chat-toggle {
    background-image: linear-gradient(120deg, #282cdc, #0063f8, #008aff, #00acff, #18cbfc);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    color: white;
    font-size: 24px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    justify-self: end;
    align-items: center;

    &:hover {
      background-image: linear-gradient(330deg, #282cdc, #0063f8, #008aff, #00acff, #18cbfc);
    }

    img {
      max-height: 32px;
    }
  }

  .chat-window {
    width: 300px;
    height: 400px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .header {
      background-image: linear-gradient(120deg, #282cdc, #0063f8, #008aff, #00acff, #18cbfc);
      border-bottom: 1px solid #ccc;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 15px 50px 10px 15px;

      img {
        border-radius: 50%;
        border: 2px solid #ccc;
        height: 50px;
        width: 50px;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        h3, p {
          color: #fff;
          margin: 0
        }
        h3 {
          font-size: 1.1rem;
        }
      }
    }

    .messages {
      flex: 1;
      overflow-y: auto;
      margin-bottom: 10px;
      padding: 10px;

      .message {
        margin: 5px 0;
      }
    }

    .input-box {
      border-top: 1px solid #ccc;
      display: flex;
      padding: 10px;

      input {
        border: 0;
        outline: none;
        
        width: 100%;
        height: 2rem;
      }
    }
  }
}



</style>
