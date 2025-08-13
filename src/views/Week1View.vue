<script setup>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

//LV1	將菜單轉為資料格式 -OK
//LV2	可以重新設定菜單的庫存數量 -OK
//LV3	還能再去設定品項名稱

const items = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: '50',
    quantity: '20',
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: '45',
    quantity: '15',
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '	綠茶與檸檬的完美結合',
    price: '55',
    quantity: '30',
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比	',
    price: '45',
    quantity: '10',
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: '50',
    quantity: '25',
  },
  {
    id: 6,
    name: '檸檬冰茶	',
    description: '檸檬與冰茶的清新組合',
    price: '45',
    quantity: '20',
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: '55',
    quantity: '18',
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: '60',
    quantity: '20',
  },
])

const editName = ref('')
const editingID = ref(null)

function minus(items) {
  if (items.quantity > 0) {
    items.quantity--
  }
  // console.log(items)
}

function plus(items) {
  if (items.quantity >= 0) {
    items.quantity++
  }
  // console.log(items)
}

function edit(item) {
  // console.log(item)
  editName.value = item.name
  // console.log(editName.value)
  editingID.value = item.id
  // console.log(editingID.value)
}

function saveEdit(item) {
  item.name = editName.value
  editingID.value = null
}

function cancelEdit() {
  editingID.value = null
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>序號</th>
          <th>品項</th>
          <th>描述</th>
          <th>價格</th>
          <th>庫存</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>
            <div v-if="editingID !== item.id">
              {{ item.name }}
              <button @click.prevent="edit(item)" class="btnEdit">編輯</button>
            </div>
            <div v-else>
              <input type="text" v-model="editName" />
              <button type="button" @click="saveEdit(item)">儲存</button>
              <button type="button" @click="cancelEdit()">取消</button>
            </div>
          </td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="minus(item)">-</button>
            {{ item.quantity }}
            <button @click="plus(item)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  border: 1px solid black;
  border-collapse: collapse;
}
.table th,
td {
  border: 1px solid black;
  padding: 8px;
}
.table th {
  background-color: #666;
  color: #fff;
}

button {
  border: 1px solid #666;
  background-color: #666;
  color: #fff;
  margin: 0 1px;
}

button:hover {
  color: #000;
  background-color: #fff;
}
</style>
