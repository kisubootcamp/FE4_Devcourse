<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter-component',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrement() {
      this.count--
    },
    increment() {
      this.count++
    },
    reset() {
      this.count = 0
    },
  },
}
</script>

<style lang="scss" scoped></style>
