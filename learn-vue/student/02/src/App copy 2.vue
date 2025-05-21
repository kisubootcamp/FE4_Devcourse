<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    increment() {
      this.count += 1
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <!-- 감소 -->
  <button @click="decrement">감소</button>
  <!-- 리셋 -->
  <button @click="reset">리셋</button>
  <!-- 증가 -->
  <button @click="increment">증가</button>
  <button @click="incrementByAmount(10)">증가</button>
</template>
<style scoped></style>
