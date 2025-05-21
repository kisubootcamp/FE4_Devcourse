<script>
export default {
  name: 'App',
  data() {
    return {
      numArr: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    evenSum() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
}
</script>
<template>
  <h1>EvenSum: {{ evenSum }}</h1>
</template>
<style scoped></style>
