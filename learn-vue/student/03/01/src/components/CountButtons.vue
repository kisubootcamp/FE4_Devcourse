<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },
  emits: ['plus', 'minus', 'reset'],
}
</script>
<template>
  <button @click="$emit('plus')">+</button>
  <button @click="$emit('reset')">0</button>
  <button @click="$emit('minus')">-</button>
</template>
<style scoped></style>
