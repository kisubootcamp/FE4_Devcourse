<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },

  emits: ['up', 'reset', 'down'],
}
</script>
<template>
  <button @click="$emit('down')">-</button>
  <button @click="$emit('reset')">reset</button>
  <button @click="$emit('up')">+</button>
</template>
<style scoped></style>
