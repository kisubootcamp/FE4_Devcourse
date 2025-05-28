<script>
// import CountButtons from './CountButtons.vue'
import CountButtons from './CountButtonsWithProp.vue'
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
}
</script>
<template>
  <CountDisplay />
  <CountButtons />
</template>
<style scoped></style>
