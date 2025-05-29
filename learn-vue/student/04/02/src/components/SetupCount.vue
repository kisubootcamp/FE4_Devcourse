<script>
import { computed, ref } from 'vue'
import FirstChild from './FirstChild.vue'

export default {
  name: 'SetupCount',
  components: {
    FirstChild,
  },
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => (count.value += 1)
    const decrement = () => (count.value -= 1)
    const reset = () => (count.value = 0)

    return {
      count,
      doubleCount,
      increment,
      decrement,
      reset,
    }
  },
}
</script>
<template>
  <h1>SetupCount: {{ count }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>

  <FirstChild />
</template>
<style scoped></style>
