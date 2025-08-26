<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
const pageTitle = '卡片標題'
</script>

<template>
  <h1>Week3 page</h1>
  <Card :title="pageTitle" />
</template>

<style></style>
