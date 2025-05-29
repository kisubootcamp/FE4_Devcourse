<script setup>
import { computed, ref } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const increment = () => (count.value += 1)
const decrement = () => (count.value -= 1)
const reset = () => (count.value = 0)
</script>
<template>
  <h1>SetupCount: {{ count }} // {{ doubleCount }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
</template>
<style scoped></style>
