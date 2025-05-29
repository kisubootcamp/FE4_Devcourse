<script>
import OptionCount from './components/OptionCount.vue'
import SetupCount from './components/SetupCount.vue'

export default {
  name: 'App',
  components: {
    OptionCount,
    SetupCount,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <!-- <OptionCount /> -->
  <SetupCount />
</template>
<style scoped></style>
