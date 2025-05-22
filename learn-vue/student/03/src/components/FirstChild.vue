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
  },
}
</script>
<template>
  <h1>FirstChild: {{ name }}</h1>
  <button @click="$emit('printHello')">클릭</button>
  <button @click="() => console.log('click')">클릭</button>
</template>
<style scoped></style>
