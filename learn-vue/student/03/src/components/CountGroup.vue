<script>
import CountButtons from './CountButtons.vue'
// import CountButtonsWithProp from './CountButtonsWithProp.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountButtons,
    CountDisplay,
    // CountButtonsWithProp,
  },
  props: {
    num: {
      type: Number,
    },
    increment: {
      type: Function,
    },
    decrement: {
      type: Function,
    },
    reset: {
      type: Function,
    },
    incrementByAmount: {
      type: Function,
    },
  },
  emits: ['increment', 'decrement', 'reset'],
  data() {
    return {}
  },
}
</script>
<template>
  <!-- <CountDisplay :num="num" /> -->
  <CountDisplay />
  <!-- <CountButtons
    @increment="$emit('increment')"
    @decrement="$emit('decrement')"
    @reset="$emit('reset')"
  /> -->
  <!-- <CountButtonsWithProp
    :increment="increment"
    :decrement="decrement"
    :reset="reset"
    :incrementByAmount="
      (amount) => {
        incrementByAmount(amount)
      }
    "
  /> -->
  <CountButtons />
</template>
<style scoped></style>
