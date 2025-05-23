<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },
  emits: ['greet', 'printHi'],
  props: {
    myCustomValue: {
      type: String,
    },
    print: {
      type: Function,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('greet')
    },
  },
}
</script>
<template>
  <h1>SecondChild Vue</h1>
  <h1>{{ myCustomValue }}</h1>
  <button @click="$emit('greet')">greet 클릭</button>
  <button @click="clickHandler">greet 클릭2</button>
  <button @click="$emit('printHi', { name: 'yucoding', age: 20 })">printHi 클릭</button>
  <button @click="print">printHi 클릭(props)</button>
</template>
<style scoped></style>
