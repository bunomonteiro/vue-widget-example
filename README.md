# 📦 Chatbot Widget - Vue 3

Este projeto é um widget de chatbot desenvolvido com Vue.js + Vite, pronto para ser usado tanto em sites estáticos quanto em projetos Vue 3 com Vite.

## 🌐 Uso em Sites Estáticos

Para integrar o widget em um site estático, siga os passos abaixo:

1- Incluir o estilo no `<head>`:

```html
<link rel="stylesheet" href="/lib/chatbot.css" />
```

1- Incluir o CDN do Vue 3:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

1- Incluir o script UMD do widget:

```html
<script src="/lib/chatbot.umd.js"></script>
```

1- Iniciar o widget:

```html
<script>
  ChatbotWidget.install('#chatbot-wrapper')
</script>
```

> 💡 Dica: É possível passar uma tag personalizada como parâmetro:

```js
ChatbotWidget.install('#chatbot-wrapper', { tag: 'meu-chatbot' })
```

A tag padrão é `<Chatbot></Chatbot>`.

1- Adicionar o HTML do widget:

```html
<div id="chatbot-wrapper">
  <Chatbot></Chatbot>
</div>
```

## ⚙️ Uso em Projetos Vue 3 (com Vite)

Para usar o widget dentro de um projeto Vue 3, siga os passos abaixo:

1- Importar o estilo no main.js ou main.ts:

```js
import './assets/lib/chatbot.css'
```

1- Importar o módulo ES do widget:

```js
import { ChatbotPlugin } from './assets/lib/chatbot.es'
```

1- Instalar o plugin no app Vue:

```js
app.use(ChatbotPlugin)
```

> 💡 Dica: Também é possível passar uma tag personalizada:

```js
app.use(ChatbotPlugin, { tag: 'meu-chatbot' })
```

A tag padrão é `<chatbot></chatbot>`.

1- Usar o widget em qualquer template:

```vue
<chatbot></chatbot>
```

----

## 📁 Estrutura do projeot

Este repositório é composto por três diretórios principais:

`chatbot/`

Projeto principal do widget. Desenvolvido com Vue 3 + Vite. Aqui é onde o componente é construído, empacotado e exportado nos formatos UMD e ESM.

`example-chatbot-vanilla/`

Projeto de exemplo que demonstra o uso do widget em um site HTML estático, utilizando CDN e scripts locais.

`example-chatbot-vue/`

----

Projeto de exemplo que mostra como integrar o widget em uma aplicação Vue 3 criada com Vite.

## 📁 Estrutura esperada dos arquivos

```bsh
/lib
  ├── chatbot.css
  ├── chatbot.umd.js
  └── chatbot.es.js
```

## 🧩 Personalização

Você pode alterar a tag do componente usado no HTML/Vue passando a opção { tag: 'nomedatag' } tanto no uso estático quanto no uso com Vue 3.

Exemplos:

- `<Chatbot></Chatbot>` (padrão)
- `<meu-chatbot></meu-chatbot>` (se { tag: 'meu-chatbot' } for usado)

----

## ✅ Requisitos

- Vue 3 (já incluído via CDN em sites estáticos)
- Navegador moderno
