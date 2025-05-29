<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },
  //   props: ['myCustomValue'],
  emits: ['greet', 'printHello'],
  props: {
    myCustomValue: {
      type: String,
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
  <button @click="$emit('greet')">클릭</button><br />
  <button @click="clickHandler">클릭</button><br />
  <button @click="$emit('printHello', 'sucoding', 30)">클릭</button>
</template>
<style scoped></style>
