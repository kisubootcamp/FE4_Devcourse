<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
    <RouterLink :to="{ name: 'productDetail', params: { orderId: '10' } }"
      >productDetail</RouterLink
    >
    <RouterLink to="/product/1">Product 1</RouterLink>
    <RouterLink to="/product/2">Product 2</RouterLink>

    <button @click="router.push('/about')">click</button>
    <button @click="router.push({ name: 'about' })">click</button>
    <button @click="router.replace({ name: 'about' })">click</button>
    <button @click="router.go(-1)">click</button>
  </nav>
  <RouterView />

  <h1>a</h1>
  <RouterView name="header" />
  <h1>b</h1>
  <RouterView name="default" />
  <h1>c</h1>
  <RouterView name="footer" />
</template>
<style scoped></style>
