<script>
export default {
  name: 'BaseCount',
  data() {
    return {
      count: 10,
    }
  },
  computes: {
    doubleCount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
  mounted() {
    console.log(this.$parent.name)
  },
}
</script>
<template>
  <h1>count: {{ count }}</h1>
  <button @click="count += 1">increment</button>
</template>
<style scoped></style>
