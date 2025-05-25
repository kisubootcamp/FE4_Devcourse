<script>
import BaseCount from './components/BaseCount.vue'

export default {
  name: 'App',
  components: {
    BaseCount,
  },
  data() {
    return {
      name: 'sucoding',
    }
  },
  mounted() {
    // const h1El = document.querySelector('h1')
    // const text = h1El.innerText
    // console.log(text)
    console.log(this.$refs.h1El.innerText)
    console.log(this.$refs.baseCount.count)
    console.log(this.$refs.baseCount.doubleCount)
    console.log(this.$refs.baseCount.increment())
  },
  methods: {
    incrementParnet() {
      this.$refs.baseCount.increment()
    },
  },
}
</script>
<template>
  <h1 ref="h1El">Hello</h1>
  <BaseCount ref="baseCount" />
  <button @click="incrementParnet">외부버튼</button>
</template>
<style scoped></style>
