<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },

  inject: ['up', 'reset', 'down'],
}
</script>
<template>
  <button @click="down">-</button>
  <button @click="reset">reset</button>
  <button @click="up">+</button>
</template>
<style scoped></style>
