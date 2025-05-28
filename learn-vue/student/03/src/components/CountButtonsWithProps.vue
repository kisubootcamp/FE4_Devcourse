<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },
  props: ['increment', 'reset', 'decrement'],
}
</script>
<template>
  <button @click="increment">+</button>
  <button @click="reset">0</button>
  <button @click="decrement">-</button>
</template>
<style scoped></style>
