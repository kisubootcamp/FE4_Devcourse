<script>
import CountButtons from './components/CountButtons.vue'
import CountDisplay from './components/CountDisplay.vue'

export default {
  name: 'App',
  components: {
    CountDisplay,
    CountButtons,
  },
  data() {
    return {
      count: 0,
    }
  },
}
</script>
<template>
  <CountDisplay :count="count" />
  <CountButtons v-model:count="count" />
</template>
<style scoped></style>
