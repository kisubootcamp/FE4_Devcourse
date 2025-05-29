<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },
  //props: ['name', 'age'],
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default() {
        return 10
      },
      // validator(value) {
      //   return value > 50
      // },
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
  <h1>{{ email }}</h1>
</template>
<style scoped></style>
