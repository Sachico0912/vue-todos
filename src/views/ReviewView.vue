<script setup>
import { ref, onMounted } from 'vue'

const menu = ref([])

onMounted(() => {
  console.log('菜單已載入:', menu.value)
  menu.value = [
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
  ]
})

// ---------------新增功能 ------------------//
const newName = ref('')
const newDescription = ref('')
const newPrice = ref(0)
const newQuantity = ref(0)

function addProduct() {
  // console.log('addProduct', menu.value)
  menu.value.push({
    id: menu.value.length + 1,
    name: newName.value,
    price: newPrice.value,
    quantity: newQuantity.value,
    description: newDescription.value,
  })
  newName.value = ''
  newDescription.value = ''
  newPrice.value = 0
  newQuantity.value = 0
}

// ---------------刪除功能 ------------------//
function delItem(id) {
  console.log(id)
  menu.value = menu.value.filter((product) => product.id !== id)
  //回傳新陣列，不是被選到的 id 就保留
}

// ---------------加減功能 ------------------//
function plus(product) {
  // console.log('觸發plus')
  // console.log(typeof product)
  // console.log(product.quantity)
  if (product.quantity >= 0) {
    product.quantity++
  }
}

function minus(product) {
  // console.log('觸發minus')
  // console.log(product.quantity)
  if (product.quantity > 0) {
    product.quantity--
  } else {
    alert('庫存不能小於0')
  }
}

// ---------------編輯功能 ------------------//
const editName = ref('')
const editDescription = ref('')
const editPrice = ref(0)
const editQuantity = ref(0)

function updateProduct(menu) {
  console.log('updateProduct', typeof menu, menu.value)
}
</script>

<template>
  <div class="review-view">
    <h1>Review CRUD</h1>
    <p>Consistent practice leads to success.</p>
  </div>
  <div>
    <h2>新增區</h2>
    品項：<input type="text" placeholder="輸入品項名稱" v-model="newName" /> 描述：<input
      type="text"
      placeholder="輸入產品描述"
      v-model="newDescription"
    />
    價格：<input type="number" placeholder="輸入價格" v-model="newPrice" /> 數量：<input
      type="number"
      placeholder="輸入庫存"
      v-model="newQuantity"
    />
    <button type="button" @click="addProduct">新增一筆資料</button>
    <hr />
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
          <th>清除資料</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in menu" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <button type="button" @click="minus(product)">-</button>
            {{ product.quantity }}
            <button type="button" @click="plus(product)">+</button>
          </td>
          <td>
            <button type="button" @click="delItem(product.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <hr />
  <div>
    <h2>編輯區</h2>
    <div>
      品項：<input type="text" v-model="editName" placeholder="輸入品項名稱" /> 描述：<input
        type="text"
        v-model="editDescription"
        placeholder="輸入產品描述"
      />
      價格：<input type="number" v-model="editPrice" placeholder="輸入價格" /> 數量：<input
        type="number"
        v-model="editQuantity"
        placeholder="輸入庫存"
      />
      <button type="button" @click="updateProduct(menu)">更新資料</button>
    </div>
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
