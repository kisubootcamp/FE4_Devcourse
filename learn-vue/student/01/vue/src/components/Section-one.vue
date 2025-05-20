<template>
  <h2>{{ message }}</h2>
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
  <button @click="messageChange">change</button>
</template>

<script>
// Option API (2.x) / Composition API (3.x)
export default {
  data() {
    return {
      message: 'Hello World',
      name: 'PSY',
      age: 20,
    }
  },
  methods: {
    messageChange() {
      this.message = 'xxx'
    },
  },
}
</script>

<style lang="scss" scoped></style>
