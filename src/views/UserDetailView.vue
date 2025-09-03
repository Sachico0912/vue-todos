<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
const route = useRoute()
const { id } = route.params
import axios from 'axios'

const user = ref('')

onMounted(async () => {
  const data = await axios.get(`https://randomuser.me/api?seed=${id}`)
  user.value = data.data.result[0]
})
</script>

<template>
  <h2>會員編號：{{ id }}</h2>
  {{ user }}
</template>
