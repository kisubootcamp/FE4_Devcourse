<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },
  props: {
    number: Number,
  },
  emits: ['increment', 'decrement', 'reset', 'incrementByAmount'],
}
</script>
<template>
  <button @click="$emit('decrement')">-</button>
  <button @click="$emit('reset')">0</button>
  <button @click="$emit('increment')">+</button>
  <button @click="$emit('incrementByAmount', 5)">+</button>
</template>
<style scoped></style>
