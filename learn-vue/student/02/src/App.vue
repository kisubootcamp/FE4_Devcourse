<script>
// 계산된 속성(computed property)
export default {
  name: 'App',
  data() {
    return {
      firstName: 'Yubin',
      lastName: 'Han',

      numArr: [1, 2, 3, 4, 5],

      count: 0,
      amount: 0,
      numArr2: [1, 2],
    }
  },
  computed: {
    // 데이터 속성을 활용해서 무언가 계산된 결과를 만들어 둘 때
    fullName() {
      return `${this.lastName} ${this.firstName}`
    },
    evenSum() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  watch: {
    count(newValue, oldValue) {
      console.log('count 변경', newValue, oldValue)
    },
    amount() {
      console.log('amount 변경')
    },
    // numArr2: {
    //   handler(n, o) {
    //     console.log('numArr2 변경', n, o)
    //   },
    //   deep: true,
    // },
    numArr2(n, o) {
      console.log('numArr2 변경', n, o)
    },
  },
}
</script>
<template>
  <h1>{{ lastName }} {{ firstName }}</h1>
  <h1>{{ fullName }}</h1>

  <h1>EvenSum: {{ evenSum }}</h1>

  <h1>Count: {{ count }}</h1>
  <button @click="count += 1">클릭</button>
  <h1>Amount: {{ amount }}</h1>
  <button @click="amount += 1">클릭</button>

  <h1>{{ numArr2 }}</h1>
  <button @click="numArr2.push(3)">추가</button>

  <button @click="numArr2 = [...numArr2, 3]">추가</button>
</template>
<style scoped></style>
