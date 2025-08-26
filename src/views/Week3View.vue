<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'

const title = ref('原始標題')

const applyText = (newText) => {
  if (!newText) return
  title.value = newText
}
</script>

<template>
  <p>父層標題：{{ title }}</p>
  <!-- 口訣：前內後外（前=emit-text，後=applyText） -->
  <Card @emit-text="applyText" />
</template>
