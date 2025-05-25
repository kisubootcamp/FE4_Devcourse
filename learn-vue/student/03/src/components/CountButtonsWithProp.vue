<script>
export default {
  name: 'CountButtonsWithProp',
  props: {
    subCount: {
      type: Function,
    },
    resetCount: {
      type: Function,
    },
    addCount: {
      type: Function,
    },
  },
  data() {
    return {}
  },
}
</script>
<template>
  <button @click="subCount">-</button>
  <button @click="resetCount">0</button>
  <button @click="addCount">+</button>
</template>
<style scoped></style>
