<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
setTimeout(function () {
  router.push('/')
}, 3000)
</script>

<template>
  <h1>此頁面不存在</h1>
  <h2>3秒後回到首頁...</h2>
</template>
