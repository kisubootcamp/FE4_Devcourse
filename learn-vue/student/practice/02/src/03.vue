<script>
export default {
  name: 'App',
  data() {
    return {
      age: 1,
    }
  },
}
</script>
<template>
  <h1>나이 : {{ age }}</h1>
  <input type="range" min="1" max="100" v-model="age" />
</template>
<style scoped></style>
