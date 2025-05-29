<script setup>
import { RouterView, RouterLink, useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/detail/1">Detail 1</RouterLink>
    <RouterLink to="/detail/2">Detail 2</RouterLink>
    <!-- push, go, replace -->
    <button @click="router.push('/about')">어바웃</button>
    <button @click="router.push({ name: 'about' })">어바웃</button>
  </nav>

  <RouterView />
</template>
<style scoped></style>
