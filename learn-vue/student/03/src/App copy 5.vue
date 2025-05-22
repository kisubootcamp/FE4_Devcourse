<script>
// import CountButtons from './components/CountButtons.vue'
import CountButtonsWithProp from './components/CountButtonsWithProp.vue'
import CountDisplay from './components/CountDisplay.vue'

export default {
  name: 'App',
  components: {
    CountDisplay,
    // CountButtons,
    CountButtonsWithProp,
  },
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    increase() {
      this.num += 1
    },
    decrease() {
      this.num -= 1
    },
    reset() {
      this.num = 0
    },
  },
}
</script>
<template>
  <CountDisplay :num />
  <!-- <CountButtons @increase="increase" @decrease="decrease" @reset="reset" /> -->
  <CountButtonsWithProp :increase="increase" :decrease="decrease" :reset="reset" />
</template>
<style scoped></style>
