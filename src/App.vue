<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/week1">Week1</RouterLink>
  <RouterLink to="/review">Review</RouterLink>

  <RouterView />
</template>

<style scoped></style>
