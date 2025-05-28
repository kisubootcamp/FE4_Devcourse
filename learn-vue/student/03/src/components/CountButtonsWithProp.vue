<script>
export default {
  name: 'CountButtonsWithProp',
  data() {
    return {}
  },

  // emits: ['up', 'reset', 'down'],
  props: {
    up: {
      type: Function,
    },
    reset: {
      type: Function,
    },
    down: {
      type: Function,
    },
  },
}
</script>
<template>
  <button @click="down">-</button>
  <button @click="reset">reset</button>
  <button @click="up">+</button>
</template>
<style scoped></style>
