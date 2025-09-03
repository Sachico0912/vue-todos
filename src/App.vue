<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/week1">Week1</RouterLink>
        <RouterLink to="/review">Review</RouterLink>
        <RouterLink to="/week2">Week2</RouterLink>
        <RouterLink to="/review2">Reivew2</RouterLink>
        <RouterLink to="/week3">Week3</RouterLink>
        <RouterLink to="/task">Task</RouterLink>
        <RouterLink to="/week4">Week4</RouterLink>
      </nav>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
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
  z-index: 100;
}
.nav a {
  color: #fff;
  text-decoration: none;
}
.container {
  margin-top: 64px;
  border: 5px solid #555;
  padding: 10px;
}
</style>
