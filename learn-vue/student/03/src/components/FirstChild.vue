<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },
  emits: ['printHello'],
  props: {
    name: {
      type: String,
    },
    print: {
      type: Function,
    },
  },
}
</script>
<template>
  <h1>FirstChild Vue: {{ name }}</h1>
  <button @click="$emit('printHello')">자식버튼</button>
  <button @click="print">자식버튼(props)</button>
</template>
<style scoped></style>
