<script>
export default {
  name: 'CountButtons',
  inject: ['increment', 'decrement', 'reset', 'incrementByAmount'],
  data() {
    return {}
  },
  // emits: ['increment', 'decrement', 'reset'],
}
</script>
<template>
  <!-- <button @click="$emit('decrement')">-</button>
  <button @click="$emit('reset')">0</button>
  <button @click="$emit('increment')">+</button> -->
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount">++</button>
</template>
<style scoped></style>
