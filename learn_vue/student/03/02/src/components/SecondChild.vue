<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },
  //   props: ['myName'],
  props: {
    myName: {
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
  <h1>{{ myName }}</h1>
  <button @click="$emit('greet')">클릭!</button>
  <button @click="clickHandler">클릭!</button>
  <!-- 매개변수 -->
  <button @click="$emit('printHello', { name: 'jiyu', age: 26 })">클릭!</button>
</template>
<style scoped></style>
