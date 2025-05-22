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
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    reset() {
      this.count = 0
    },
    decrement() {
      this.count -= 1
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <!-- provide 방식 -->
  <CountGroup />
</template>
<style scoped></style>
