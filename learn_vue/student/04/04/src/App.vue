<script>
import OptionCount from './components/OptionCount.vue'
import SetUp from './components/SetUp.vue'
import SetUpAliasCount from './components/SetUpAliasCount.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    OptionCount,
    SetUp,
    SetUpAliasCount,
  },
}
</script>
<template>
  <OptionCount />
  <SetUp />
  <SetUpAliasCount />
</template>
<style scoped></style>
