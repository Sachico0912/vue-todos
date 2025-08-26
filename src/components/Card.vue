<script setup>
import { ref } from 'vue'

const emit = defineEmits(['emit-text'])
const text = ref('')

const send = () => {
  emit('emit-text', text.value) // 傳出字串參數
}
</script>

<template>
  <div style="border: 1px solid #ddd; padding: 8px; border-radius: 6px">
    <input v-model="text" placeholder="輸入新標題..." />
    <button @click="send">套用到父層</button>
  </div>
</template>
