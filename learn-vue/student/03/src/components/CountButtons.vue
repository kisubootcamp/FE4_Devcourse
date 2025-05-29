<script>
export default {
  name: 'CountButtons',
  inject: ['increment', 'decrement', 'reset', 'incrementByAmount'],
}
</script>
<template>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount(10)">++</button>
</template>
<style scoped></style>
