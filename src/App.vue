<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/week1">Week1</RouterLink>
      <RouterLink to="/review">Review</RouterLink>
      <RouterLink to="/Week2">Week2</RouterLink>
      <RouterLink to="/review2">Reivew2</RouterLink>
    </nav>
    <div class="container">
      <h1>Vue Todos</h1>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 1rem;
  background-color: #333;
  padding: 1rem;
}
.nav a {
  color: #fff;
  text-decoration: none;
}
</style>
