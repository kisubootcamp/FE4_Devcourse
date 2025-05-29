<script>
export default {
  name: 'CountDisplay',
  data() {
    return {}
  },
  props: {
    count: Number,
  },
  inject: ['name'],
}
</script>
<template>
  <h1>카운트 : {{ count }}</h1>
  <h2>provide : {{ name }}</h2>
</template>
<style scoped></style>
