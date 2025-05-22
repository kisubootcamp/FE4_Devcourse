<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },

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
  <h1>SecondChildvue</h1>
  <h1>{{ myCustomValue }}</h1>
  <button @click="$emit('greet')">click</button>
  <button @click="$emit('printHello', { name: 'handsome', age: 3 })">click</button>
  <button @click="clickHandler">click</button>
</template>
<style scoped></style>
