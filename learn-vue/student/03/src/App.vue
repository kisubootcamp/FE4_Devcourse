<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      count: 0,
    }
  },
  provide() {
    return {
      count: () => this.count,
      increment: this.increment,
      decrement: this.decrement,
      reset: this.reset,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    increment() {
      this.count += 1
    },
    reset() {
      this.count = 0
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <CountGroup />
</template>
<style scoped></style>
