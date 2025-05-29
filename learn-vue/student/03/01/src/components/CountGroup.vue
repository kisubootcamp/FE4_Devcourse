<script>
import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
  data() {
    return {}
  },
  props: {
    count: {
      type: Number,
    },
  },
  emits: ['plus', 'minus', 'reset'],
}
</script>
<template>
  <CountDisplay :count="count" />
  <CountButtons @plus="$emit('plus')" @minus="$emit('minus')" @reset="$emit('reset')" />
</template>
<style scoped></style>
