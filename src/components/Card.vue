<!-- 卡片元件設計 defineProps() -->

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, default: '' },
  compact: { type: Boolean, default: false }, // 新增
})
</script>

<template>
  <div class="card" :class="{ 'card--compact': props.compact }">
    <h3 class="card__title">{{ props.title }}</h3>
    <p v-if="props.content" class="card__content">{{ props.content }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 8px;
}
.card--compact {
  padding: 6px;
  font-size: 12px;
  background-color: #f9fafb;
}
.card__title {
  margin: 0 0 8px;
  font-weight: 600;
  font-size: 16px;
}
.card__content {
  margin: 0;
  color: #374151;
  font-size: 14px;
}

.card--compact .card__title {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 500;
}
.card--compact .card__content {
  font-size: 12px;
  color: #6b7280;
}
</style>
