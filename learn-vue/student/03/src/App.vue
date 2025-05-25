<script>
import CountButtons from './components/CountButtons.vue'
import CountButtonsWithProp from './components/CountButtonsWithProp.vue'
import CountDisplay from './components/CountDisplay.vue'
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountDisplay,
    CountButtons,
    CountButtonsWithProp,
    CountGroup,
  },
  data() {
    return { count: 0 }
  },
  provide() {
    return {
      count: () => this.count,
      subCount: this.subCount,
      resetCount: this.resetCount,
      incrementByAmount: this.incrementByAmount,
      addCount: this.addCount,
    }
  },
  methods: {
    subCount() {
      this.count -= 1
    },
    resetCount() {
      this.count = 0
    },
    addCount() {
      this.count += 1
    },
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <CountGroup />
  <CountDisplay :count="count" />
  <CountButtons
    :count="count"
    @sub-count="subCount"
    @reset-count="resetCount"
    @add-count="addCount"
  />
  <CountButtonsWithProp :subCount="subCount" :resetCount="resetCount" :addCount="addCount" />
</template>
<style scoped></style>
