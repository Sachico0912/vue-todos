<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
const title = '卡片 A'
const content = '這是內容 A'
</script>

<template>
  <Card :title="title" :content="content" />
  <Card :title="title" :content="content" compact />
  <!-- 注意：presence 寫法 <Card compact /> 代表 true -->
</template>
