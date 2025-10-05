<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <chatbot></chatbot>
</template>

<style scoped>
header {
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 5px;
}

.logo {
  display: inline-block;
  height: 2rem;
  width: auto;
}

nav {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

nav a {
  color: #333;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #ccc;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}

main {
  --logo-h: 2rem;
  --header-space: 20px;
  --header-h: calc(var(--image-h) + var(--header-space));
  min-height: calc(100vh - var(--header-h));
}
</style>
