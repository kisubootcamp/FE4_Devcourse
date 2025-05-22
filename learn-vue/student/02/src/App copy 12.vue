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
      console.log('computed evenSum')
      // 결과 값을 캐싱해서 사용. 여러번 호출 시 콘솔에 값은 한번만 찍힘
      // 계산을 위해 참조하는 데이터가 변화하면 다시 계산됨
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  methods: {
    evensSum(numArr) {
      console.log('method evenSum')
      // 여러번 호출 시 콘솔에 값 여러번 찍힘
      return numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
    evensSum2() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
}
</script>
<template>
  <h1>EvenSum: {{ evenSum }}</h1>
  <h1>EvenSum: {{ evenSum }}</h1>
  <!-- <h1>EvenSum: {{ evensSum(numArr) }}</h1>
  <h1>EvenSum: {{ evensSum2() }}</h1> -->
  <button @click="numArr.push(8)">클릭</button>
</template>
<style scoped></style>
