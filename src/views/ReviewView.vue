<script setup>
import { ref } from 'vue'

const menu = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    price: 50,
    quantity: 50,
    description: '一杯美味的珍珠奶茶，口感滑順，甜而不膩。',
  },
  {
    id: 2,
    name: '紅茶',
    price: 30,
    quantity: 30,
    description: '一杯清新的紅茶，帶有淡淡的花香。',
  },
  {
    id: 3,
    name: '咖啡',
    price: 40,
    quantity: 40,
    description: '一杯濃郁的咖啡，提神醒腦，適合早晨飲用。',
  },
  {
    id: 4,
    name: '果汁',
    price: 60,
    quantity: 60,
    description: '新鮮榨取的果汁，富含維生素，健康又美味。',
  },
  {
    id: 5,
    name: '水',
    price: 10,
    quantity: 100,
    description: '清涼解渴的純淨水，隨時補充水分。',
  },
  {
    id: 6,
    name: '啤酒',
    price: 80,
    quantity: 20,
    description: '一杯冰涼的啤酒，適合聚會時享用，口感爽口。',
  },
  {
    id: 7,
    name: '雞尾酒',
    price: 100,
    quantity: 15,
    description: '調和多種酒精飲料的雞尾酒，色彩繽紛，口感獨特。',
  },
  {
    id: 8,
    name: '威士忌',
    price: 150,
    quantity: 10,
    description: '一杯陳年威士忌，香氣濃郁，口感醇厚，適合慢慢品味。',
  },
  {
    id: 9,
    name: '香檳',
    price: 200,
    quantity: 5,
    description: '慶祝時刻的香檳，氣泡豐富，口感清新，帶來愉悅的享受。',
  },
  {
    id: 10,
    name: '紅酒',
    price: 120,
    quantity: 8,
    description: '一杯優雅的紅酒，帶有濃郁的果香和木質香氣，適合搭配美食。',
  },
])
</script>

<template>
  <div class="review-view">
    <h1>Review CRUD</h1>
    <p>Consistent practice leads to success.</p>
  </div>
  <div class="menu">
    Menu / 菜單
    <table class="menu-table">
      <thead>
        <tr>
          <th>序號</th>
          <th>品項</th>
          <th>產品描述</th>
          <th>價格</th>
          <th>庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in menu" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>${{ item.price }}</td>
          <td>
            <button type="button">-</button>
            {{ item.quantity }}
            <button type="button">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.menu-table {
  border: 1px solid #000;
  border-collapse: collapse;
}
.menu-table th,
td {
  border: 1px solid #000;
  padding: 8px;
}
</style>
