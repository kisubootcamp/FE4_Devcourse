<!-- <script>
import BaseTImer from './components/BaseTImer.vue'
export default {
  name: 'App',
  components: {
    // BaseCount,
    BaseTImer,
  },
  data() {
    return {
      isShow: true,
    }
  },
}
</script>
<template>
  <BaseTImer v-if="isShow" />
  <button @click="isShow = !isShow">click</button>
</template>

<style scoped></style> -->

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    BaseCount,
  },
  mounted() {
    //   const h1El = document.querySelector('h1')
    //   const text = h1El.innerText
    //   console.log(text)
    // },
    console.log(this.$refs.h1El.innerText)
    console.log(this.$refs.baseCount.count)
  },
  methods: {
    incrementParent() {
      this.$refs.baseCount.increment()
    },
  },
}
</script>
<template>
  <h1 ref="h1El">Hello</h1>
  <BaseCount ref="baseCount" />
  <button @click="incrementParent">외부버튼</button>
</template>
<style scoped></style>
