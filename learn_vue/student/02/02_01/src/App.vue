<script>
export default {
  name: 'App',
  data() {
    return {
      numArr: [1, 2, 3, 4, 5],
      count: 0,
    }
  },
  computed: {
    evenSum() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  watch: {
    count(newValue, oldValue) {
      console.log('변경됨!', newValue, oldValue)
    },
    numArr: {
      handler() {
        console.log('변경됨')
      },
      deep: true,
    },
  },
}
</script>
<template>
  <h1>짝수 계산 : {{ evenSum }}</h1>
  <p>count : {{ count }}</p>
  <button @click="count += 1">watch</button>
  <h1>{{ numArr }}</h1>
  <button @click="numArr.push(9)">추가</button>
</template>
<style scoped></style>
