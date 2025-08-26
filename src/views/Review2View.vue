<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const api = 'https://todolist-api.hexschool.io/'

//---------------註冊功能 ------------------//
const signUpField = ref({
  email: '',
  password: '',
  nickname: '',
})

const signUp = async () => {
  try {
    // console.log(`${api}users/sign_up`)
    const res = await axios.post(`${api}users/sign_up`, signUpField.value)
    console.log(res)
    signUpRes.value = '註冊成功,uid=' + res.data.uid
  } catch (error) {
    console.error('註冊失敗:', error)
    signUpRes.value = '註冊失敗'
  }
}

const signUpRes = ref('')

//---------------登入功能 ------------------//
const signInField = ref({
  email: '',
  password: '',
})
const signInRes = ref('')

const signIn = async () => {
  try {
    const res = await axios.post(`${api}users/sign_in`, signInField.value)
    console.log(res)
    signInRes.value = '登入成功,token=' + res.data.token
    //把登入資訊儲存到cookie
    document.cookie = `customTodoToken=${res.data.token};path=/`
  } catch (error) {
    console.error('登入失敗:', error)
    signInRes.value = '登入失敗'
  }
}

//---------------驗證功能 ------------------//

const user = ref({
  nickname: '',
  uid: '',
})

onMounted(async () => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)customTodoToken\s*=\s*([^;]*).*$)/i, '$1')
  console.log(token)
  const res = await axios.get(`${api}users/checkout`, {
    headers: {
      Authorization: token,
    },
  })
  console.log(res)
  user.value = res.data
})

//---------------登出功能(未完成) ------------------//

const signOut = async () => {
  try {
    const res = await axios.post(`${api}users/sign_out`, {
      headers: {
        Authorization: token.value,
      },
    })
    console.log(res.data.token)
    // res.data.token = ''
    console.log('登出成功', res)
  } catch (error) {
    console.log('登出失敗', error)
  }
}
</script>

<template>
  <h1>註冊功能</h1>
  <input type="email" placeholder="請輸入Email" v-model="signUpField.email" />
  <input type="password" placeholder="請輸入密碼" v-model="signUpField.password" />
  <input type="text" placeholder="請輸入暱稱" v-model="signUpField.nickname" />
  <button type="button" @click="signUp">註冊</button><br />
  {{ signUpField }}<br />
  <br /><b>註冊結果: {{ signUpRes }}</b>
  <h1>登入功能</h1>
  <input type="email" name="email" placeholder="請輸入Email" v-model="signInField.email" />
  <input type="password" name="password" placeholder="請輸入密碼" v-model="signInField.password" />
  <button type="button" @click="signIn">登入</button><br />
  {{ signInField }}<br />
  <br /><b>登入結果: {{ signInRes }}</b>
  <h1>驗證功能</h1>
  <div v-if="user.uid">
    <p>Uid:{{ user.uid }}</p>
    <p>暱稱:{{ user.nickname }}</p>
  </div>
  <div v-else>你還沒登入!</div>
  <h1>登出功能</h1>
  <button type="button" @click="signOut">登出</button>
</template>
