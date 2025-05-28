<script>
import OptionCount from './components/OptionCount.vue'
import SetUpAliasCount from './components/SetUpAliasCount.vue'
import SetUpCount from './components/SetUpCount.vue'

export default {
  name: 'AppTwo',
  components: {
    OptionCount,
    SetUpCount,
    SetUpAliasCount,
  },
  data() {
    return {}
  },
}
</script>
<template>
  <OptionCount />
  <SetUpCount />
  <SetUpAliasCount />
</template>
<style scoped></style>
