<script>
export default {
  name: 'CountDisplay',
  data() {
    return {}
  },
  inject: ['name'],
  props: {
    count: {
      type: Number,
    },
  },
}
</script>
<template>
  <h1>Count: {{ count }} // {{ name }}</h1>
</template>
<style scoped></style>
