<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div style="border: 3px solid black; padding: 10px">
    <h1>Week4</h1>
  </div>
  <div class="leftBlock">
    <ul>
      <li>選單1</li>
      <li>選單2</li>
      <li>選單3</li>
      <li>選單4</li>
    </ul>
  </div>
  <div class="rightBlock">
    <RouterView />
  </div>
</template>

<style>
.leftBlock {
  background-color: blue;
}
.rightBlock {
  background-color: pink;
}
</style>
