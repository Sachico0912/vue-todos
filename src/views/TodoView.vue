<script setup>
import { ref } from 'vue'
import axios from 'axios'

const api = 'https://todolist-api.hexschool.io/'

const signupField = ref({
  email: '',
  password: '',
  nickname: '',
})

const signupRes = ref('')

const signup = async () => {
  try {
    //   console.log(`${api}users/signup`)
    const res = await axios.post(`${api}users/sign_up`, signupField.value)
    console.log(res)
    signupRes.value = res.data.uid
  } catch (error) {
    console.error('註冊失敗:', error)
  }
}

const signinField = ref({
  email: '',
  password: '',
})

const signinRes = ref('')

const signIn = async () => {
  try {
    const res = await axios.post(`${api}users/sign_in`, signinField.value)
    console.log(res)
    signinRes.value = res.data.token
  } catch (error) {
    console.error('登入失敗:', error)
  }
}
</script>
<template>
  <h2>待辦</h2>
  <h2>註冊功能</h2>
  <input type="email" placeholder="電子郵件" v-model="signupField.email" /><br />
  <input type="password" placeholder="密碼" v-model="signupField.password" /><br />
  <input type="text" placeholder="暱稱" v-model="signupField.nickname" /><br />
  <button type="button" @click="signup">註冊</button><br />
  {{ signupField }}

  <hr />
  <br />
  <h2>登入功能</h2>
  <input type="email" placeholder="電子郵件" v-model="signinField.email" />
  <input type="password" placeholder="密碼" v-model="signinField.password" />
  <button type="button" @click="signIn">登入</button>
  {{ signinField }}
  <hr />
  <b>token: {{ signinRes }}</b>
  <br />
  <h2>登出功能</h2>
  <button type="button">登出</button>
</template>
<style></style>
