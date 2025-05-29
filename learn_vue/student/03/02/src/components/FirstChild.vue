<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },
  //   props: ['name', 'age'],
  props: {
    name: {
      type: String, // String,Number, Object, Boolean, Function, Symbol
      required: true,
    },
    age: {
      type: Number,
      default() {
        return 20
      },
      validator(value) {
        return value > 50
      },
    },
    email: {
      type: String,
      validator(value) {
        return value.includes('@') // @있으면 true 없으면 false
      },
    },
  },
}
</script>
<template>
  <h1>안녕</h1>
  <h1>{{ name }}, {{ age }}, {{ email }}</h1>
</template>
<style scoped></style>
