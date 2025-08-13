<script setup></script>

<template>
  <div class="container">
    <div class="side">
      <img class="todoImg" :src="todoImg" alt="代辦圖片" />
    </div>
    <div class="side">
      <div class="signup-form">
        <h2>註冊帳號</h2>
        <p>Email</p>
        <input type="email" placeholder="請輸入 Email" v-model="signUpField.email" /><br />
        <span>*此欄位不可為空</span>
        <p>密碼</p>
        <input type="password" placeholder="密碼" v-model="signUpField.password" /><br />
        <p>暱稱</p>
        <input type="text" placeholder="暱稱" v-model="signUpField.nickname" /><br />

        <button class="signup-btn" type="button" @click="signUp">註冊帳號</button>

        {{ signUpField }}
      </div>
    </div>
  </div>
</template>

<style></style>
