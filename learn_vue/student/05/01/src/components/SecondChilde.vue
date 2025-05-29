<script setup>
import { inject } from 'vue'
const count = inject('count')
const increment = inject('increment')
</script>
<template>
  <h1>SecondChilde</h1>
  <h1>{{ count }}</h1>
  <button @click="increment">저녁 뭐먹바오?</button>
</template>
<style scoped></style>
