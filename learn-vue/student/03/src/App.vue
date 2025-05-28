<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      count: 20,
    }
  },
  provide() {
    return {
      count: () => this.count,
      increment: this.increment,
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    increment() {
      console.log('increment')
      this.count += 1
    },
    incrementByAmount(amonut) {
      this.count += amonut
    },
  },
}
</script>
<template>
  <!-- props: ['name'] -->
  <!--
  props: {
    name: {
      type: String, Number, Function, Boolean, Array, Symbol
      default(){} //
      required: true,
      validator() { return true }
    }
  },
  emits: ['printHello']
   -->
  <!--
  <button @click="$emit('printHello')" >클릭</button>
  -->
  <CountGroup name="sucoding" @print-hello="() => console.log('hello')" />
</template>
<style scoped></style>
