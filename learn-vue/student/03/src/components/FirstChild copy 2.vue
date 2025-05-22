<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },
  // props: ['name', 'age'],   -- (x)
  props: {
    name: {
      type: String, // String, Number, Array, Object, Boolean, Function, Symbol
      required: true,
    },
    age: {
      type: Number,
      default() {
        return 50
      },
      validator(value) {
        return value > 50
      },
    },
    email: {
      type: String,
      validator(value) {
        return value.includes('@')
      },
    },
  },
}
</script>
<template>
  <h1>FirstChild Vue</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
</template>
<style scoped>
.isLoggedin {
  font-size: 50px;
}
</style>
