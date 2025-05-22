<!-- <script>
// 계산된 속성(computed property)
export default {
  name: 'AppThree',
  data() {
    return {
      firstName: 'Gildong',
      lastName: 'Hong',
    }
  },
  computed: {
    // 데이터 속성을 활용해서 무언가 계산된 결과를 만들어 둘 때
    fullName() {
      return `${this.lastName} ${this.firstName}`
    },
  },
}
</script>
<template>
  <h1>{{ fullName }}</h1>
</template>
<style scoped></style> -->

<!-- <script>
export default {
  name: 'AppThree',
  data() {
    return {
      numArr: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    evenSum() {
      console.log('Computed EvenSum')
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  methods: {
    evenSum2(numArr) {
      console.log('method EvenSum')
      return numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
    evenSum3() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
}
</script>
<template>
  {{ evenSum }}
  {{ evenSum }}
  <button @click="numArr.push(8)">클릭</button>
</template>
<style scoped></style> -->

<script>
export default {
  name: 'AppThree',
  data() {
    return {
      count: 0,
      amount: 0,
      numArr: [1, 2],
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log('변경됨!', newValue, oldValue)
    },
    amount() {
      console.log('amount 변경됨!')
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
  <h1>Count: {{ count }}</h1>
  <button @click="count += 1">클릭</button>
  <h1>Amount: {{ amount }}</h1>
  <button @click="amount += 1">클릭</button>
  <h1>{{ numArr }}</h1>
  <button @click="numArr.push(3)">add</button>
</template>
<style scoped></style>
