<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav style="display: flex; gap: 10px">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/data-fetch">DataFetch</RouterLink>
  </nav>
  <RouterView />
</template>
