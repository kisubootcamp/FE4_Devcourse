<script>
export default {
  name: 'BaseCount',
  data() {
    return {
      count: 0,
    }
  },
  beforeCreate() {
    console.log('before create', this.count)
  },
  created() {
    console.log('created', this.count)
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated', this.count)
  },
  beforeUpdate() {
    console.log('before updated', this.count)
  },
  unmounted() {
    console.log('unmounted')
  },
  beforeUnmount() {
    console.log('before unmounted')
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
}
</script>
<template>
  <h1>count : {{ count }}</h1>
  <button @click="count += 1">count</button>
</template>
<style scoped></style>
