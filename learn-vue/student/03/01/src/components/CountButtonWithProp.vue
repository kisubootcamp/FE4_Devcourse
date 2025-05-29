<script>
export default {
  name: 'CountButtonWithProp',
  data() {
    return {}
  },
  props: {
    plus: {
      type: Function,
    },
    minus: {
      type: Function,
    },
    reset: {
      type: Function,
    },
  },
}
</script>
<template>
  <button @click="plus">+</button>
  <button @click="reset">0</button>
  <button @click="minus">-</button>
</template>
<style scoped></style>
