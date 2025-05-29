<script>
import { ref, computed } from 'vue'
export default {
  name: 'SetUp',
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const decrement = () => count.value--
    const increment = () => count.value++
    const reset = () => (count.value = 0)
    return { count, doubleCount, decrement, reset, increment }
  },
}
</script>
<template>
  <h1>setup count : {{ count }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
</template>
<style scoped></style>
