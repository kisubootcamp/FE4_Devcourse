<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
//.push 다음 페이지로 이동
//.replace
//.go
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <!-- route의 name값을 통해 링크를 찾을 수도 있다.
     params를 이용하면 동적 세그먼트를 지정할 수 있다. -->
    <RouterLink :to="{ name: 'productDetail', params: { orderId: 24343 } }">product 1</RouterLink>
    <RouterLink to="/product/2">product 2</RouterLink>
    <button @click="router.push('/about')">클릭</button>
    <button @click="router.replace({ name: 'about' })">클릭</button>
    <button @click="router.go(-1)">클릭</button>
  </nav>
  <h1>a</h1>
  <RouterView name="header" />
  <h1>b</h1>
  <RouterView name="default" />
  <h1>c</h1>
  <RouterView name="footer" />
</template>
<style scoped></style>
