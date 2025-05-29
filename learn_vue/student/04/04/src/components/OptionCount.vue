<script>
export default {
  name: 'OptionCount',
  data() {
    return { count: 0 }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count++
    },
    reset() {
      this.count++
    },
  },
}
</script>
<template>
  <h1>count : {{ count }}</h1>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
</template>
<style scoped></style>
