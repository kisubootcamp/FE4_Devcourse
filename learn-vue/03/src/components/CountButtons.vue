<script>
export default {
  name: 'CountButtons',
  props: {
    count: Number,
  },
  data() {
    return {
      localCount: this.count,
    }
  },
  methods: {
    decrement() {
      this.localCount--
      this.$emit('update:count', this.localCount)
    },
    reset() {
      this.localCount = 0
      this.$emit('update:count', this.localCount)
    },
    increment() {
      this.localCount++
      this.$emit('update:count', this.localCount)
    },
  },
}
</script>
<template>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
</template>
<style scoped></style>
