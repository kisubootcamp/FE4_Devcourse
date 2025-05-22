<script>
export default {
  name: 'CountDisplay',
  data() {
    return {}
  },
  inject: ['num'],
  computed: {
    currentCount() {
      return this.num()
    },
  },
  props: {
    // num: {
    //   type: Number,
    // },
  },
}
</script>
<template>
  <h1>Count: {{ currentCount }}</h1>
</template>
<style scoped></style>
