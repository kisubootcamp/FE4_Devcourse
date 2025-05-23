<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },
  // props: ['name', 'age'], -- (x)
  props: {
    name: {
      // String, Number, Boolean, Array, Object, Function
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default() {
        return 20
      },
      validator(value) {
        return value > 30
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
<style scoped></style>
