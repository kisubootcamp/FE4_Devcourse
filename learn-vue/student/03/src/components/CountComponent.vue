<template>
  <div>
    <CountDisplay />
    <CountButton />
  </div>
</template>

<script>
import CountDisplay from './CountDisplay.vue'
import CountButton from './CountButton.vue'
export default {
  components: {
    CountDisplay,
    CountButton,
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
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
  },
}
</script>

<style lang="scss" scoped></style>
