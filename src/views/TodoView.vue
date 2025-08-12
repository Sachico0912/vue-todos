<script setup>
import { ref } from 'vue'
import axios from 'axios'

const api = 'https://todolist-api.hexschool.io/'

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
  <h2>待辦</h2>
  <h2>註冊功能</h2>
  <input type="email" placeholder="電子郵件" v-model="signUpField.email" /><br />
  <input type="password" placeholder="密碼" v-model="signUpField.password" /><br />
  <input type="text" placeholder="暱稱" v-model="signUpField.nickname" /><br />
  <button type="button" @click="signUp">註冊</button><br />
  {{ signUpField }}
  <hr />
  <b>Uid:{{ signUpRes }}</b>

  <hr />
  <br />
  <h2>登入功能</h2>
  <input type="email" placeholder="電子郵件" v-model="signInField.email" />
  <input type="password" placeholder="密碼" v-model="signInField.password" />
  <button type="button" @click="signIn">登入</button>
  {{ signInField }}
  <hr />
  <b>token: {{ signInRes }}</b>
  <br />
  <h2>登出功能</h2>
  <button type="button">登出</button>
</template>
<style></style>
