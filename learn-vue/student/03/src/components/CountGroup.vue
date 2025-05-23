<script>
import CountDisplay from './CountDisplay.vue'
// import CountButtons from './CountButtons.vue'
import CountButtonsWithProp from './CountButtonsWithProp.vue'
export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    // CountButtons,
    CountButtonsWithProp,
  },
}
</script>
<template>
  <CountDisplay />
  <!-- <CountButtons @reset="reset" @increment="increment" @decrement="decrement" /> -->
  <CountButtonsWithProp />
</template>
<style scoped></style>
