<script>
import CountButtons from './CountButtons.vue'
import CountDisPlay from './CountDisPlay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisPlay,
    CountButtons,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <CountDisPlay />
  <CountButtons />
</template>
<style scoped></style>
