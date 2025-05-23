<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      num: 0,
    }
  },
  provide() {
    // 전역으로 공유할 상태값 정의
    return {
      num: () => this.num,
      increment: this.increment,
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    increment() {
      this.num += 1
    },
    decrement() {
      this.num -= 1
    },
    reset() {
      this.num = 0
    },
    incrementByAmount(amout) {
      this.num += amout
    },
  },
}
</script>
<template>
  <!-- <CountGroup :num="num" @increment="increment" @decrement="decrement" @reset="reset" /> -->
  <!-- <CountGroup
    :num="num"
    :increment="increment"
    :decrement="decrement"
    :reset="reset"
    :incrementByAmount="(amount) => incrementByAmount(amount)"
  /> -->
  <CountGroup />
</template>
<style scoped></style>
