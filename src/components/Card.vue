<!-- 卡片元件設計 defineProps() -->

<script setup>
const props = defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div style="border: 1px solid #ddd; padding: 8px; border-radius: 6px">
    <h3>{{ props.title }}</h3>
  </div>
</template>
