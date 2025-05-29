<script>
import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  data() {
    return {}
  },
  components: {
    CountDisplay,
    CountButtons,
  },
  props: {
    count: { type: Number },
  },
  emits: ['increment', 'decrement', 'reset', 'incrementByAmount'],
}
</script>
<template>
  <CountDisplay :count="count" />
  <CountButtons
    @decrement="$emit('decrement')"
    @increment="$emit('increment')"
    @reset="$emit('reset')"
    @incrementByAmount="$emit('incrementByAmount', $event)"
  />
</template>
<style scoped></style>
