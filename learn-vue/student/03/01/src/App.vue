<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      count: 0,
    }
  },
  provide() {
    return {
      name: 'sucoding',
    }
  },
  methods: {
    plus() {
      this.count += 1
    },
    minus() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    // plusByAmount(amount){
    //   this.amount +=amount
    // }
  },
}
</script>
<template>
  <CountGroup :count="count" @plus="plus" @minus="minus" @reset="reset" />
</template>
<style scoped></style>
