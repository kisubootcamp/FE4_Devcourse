<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },
  props: {
    myCustomValue: {
      type: String,
    },
  },
  emits: ['greet', 'printHello'],
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
  <button @click="$emit('greet')">클릭</button>
  <button @click="clickHandler">클릭</button>
  <button @click="$emit('printHello', 'sucoding', 30)">클릭</button>
</template>
<style scoped></style>
