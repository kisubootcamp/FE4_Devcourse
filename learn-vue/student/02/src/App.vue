<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      amount: 0,
      numArr: [1, 2],
    }
  },
  watch: {
    count(n, o) {
      console.log('count 변경됨!!', n, o)
    },
    amount() {
      console.log('amount 변경됨!!')
    },
    numArr(n, o) {
      console.log(n, o)
    },
    // numArr: {
    //   handler(n, o) {
    //     console.log(n)
    //     console.log(o)
    //   },
    //   deep: true,
    // },
  },
}
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count += 1">클릭</button>
  <h1>Amount: {{ amount }}</h1>
  <button @click="amount += 1">클릭</button>
  <h1>{{ numArr }}</h1>
  <button @click="numArr = [...numArr, 3]">추가</button>
</template>
<style scoped></style>
