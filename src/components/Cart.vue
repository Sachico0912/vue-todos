<script setup>
import { inject } from 'vue'
const props = defineProps({
  carts: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['remove-cart'])

function handelRemoveCart(item) {
  emit('remove-cart', item)
  showNotification(`商品${item.name} 已移除`)
}

const showNotification = inject('showNotification')
</script>

<template>
  <div class="col-md-4">
    <h2 class="mb-3">購物車</h2>
    <div v-if="carts.length === 0">購物車是空的</div>
    <ul class="list-group mb-3">
      <li
        v-for="item in carts"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <h6 class="my-0">{{ item.name }}</h6>
          <small class="text-muted">數量：{{ item.quantity }}</small>
        </div>
        <div>
          <span class="text-muted">$ {{ item.quantity * item.price }}</span>
          <button class="btn btn-sm btn-outline-danger ms-2" @click="handelRemoveCart(item)">
            移除
          </button>
        </div>
      </li>
    </ul>
    <div v-if="carts.length !== 0" class="text-end fw-bold">總金額:{{ totalPrice }}</div>
  </div>
</template>
