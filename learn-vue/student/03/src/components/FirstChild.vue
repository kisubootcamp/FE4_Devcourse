<script>
export default {
  name: 'FirstChild',
  data() {
    return {
      color: 'green',
      isLoggedin: true,
    }
  },
  // props: ['name', 'age'], -> 권장하지 않는 방법
  props: {
    name: {
      type: String,
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
        return value.includes('@') // @ true !@ false
      },
    },
  },
}
</script>
<template>
  <div>
    <h2>FirstChild</h2>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ email }}</h1>
  </div>
</template>
<style scoped></style>
