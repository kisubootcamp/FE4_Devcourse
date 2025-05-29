<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'productDetail', params: { orderId: '10' } }">Product 1</RouterLink>
    <RouterLink to="/prduct/2">Product 2</RouterLink>

    <!-- 프로그래밍 탐색 방식 -->
    <button @click="router.push('/about')">클릭</button>
    <button @click="router.replace({ name: 'about' })">클릭</button>
    <button @click="router.go(-1)">클릭</button>
  </nav>
  <RouterView name="header" />
  <RouterView name="default" />
  <RouterView name="footer" />
</template>
<style scoped></style>
