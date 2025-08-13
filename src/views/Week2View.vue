<script setup>
import { ref } from 'vue'
import axios from 'axios'

const api = 'https://todolist-api.hexschool.io/'
const todoImg = 'src/assets/todo.png'

const signUpField = ref({
  email: '',
  password: '',
  nickname: '',
})

const signUpRes = ref('')

const signUp = async () => {
  try {
    //   console.log(`${api}users/signup`)
    const res = await axios.post(`${api}users/sign_up`, signUpField.value)
    console.log(res)
    signUpRes.value = res.data.uid
  } catch (error) {
    console.error('註冊失敗:', error)
  }
}

const signInField = ref({
  email: '',
  password: '',
})

const signInRes = ref('')

const signIn = async () => {
  try {
    const res = await axios.post(`${api}users/sign_in`, signInField.value)
    console.log(res)
    signInRes.value = res.data.token
  } catch (error) {
    console.error('登入失敗:', error)
  }
}
</script>
<template>
  <div class="signup-container">
    <div class="side">
      <img class="todoImg" :src="todoImg" alt="代辦圖片" />
    </div>
    <div class="side">
      <div class="control_form">
        <h2>登入功能</h2>
        <input type="email" placeholder="電子郵件" v-model="signInField.email" />
        <input type="password" placeholder="密碼" v-model="signInField.password" />
        <button type="button" class="btn" @click="signIn">登入</button>
        {{ signInField }}
        <b>token: {{ signInRes }}</b>
      </div>
    </div>
  </div>
  <div class="control_form">
    <h2>註冊帳號</h2>
    <p>Email</p>
    <input type="email" placeholder="請輸入 Email" v-model="signUpField.email" /><br />
    <span>*此欄位不可為空</span>
    <p>密碼</p>
    <input type="password" placeholder="密碼" v-model="signUpField.password" /><br />
    <p>暱稱</p>
    <input type="text" placeholder="暱稱" v-model="signUpField.nickname" /><br />

    <button class="btn" type="button" @click="signUp">註冊</button>
    {{ signUpField }}
    <b>uid: {{ signUpRes }}</b>
  </div>

  <div class="logout">
    <button type="button" class="btn" @click="logOut">登出</button>
  </div>
</template>
<style></style>
