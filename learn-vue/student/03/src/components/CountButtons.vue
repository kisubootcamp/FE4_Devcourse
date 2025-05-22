<script>
export default {
  name: 'CountButtons',
  inject: ['increment', 'reset', 'decrement', 'incrementByAmount'],
}
</script>
<template>
  <button @click="increment">+</button>
  <button @click="reset">0</button>
  <button @click="decrement">-</button>
  <button @click="incrementByAmount(20)">클릭</button>
</template>
<style scoped></style>
