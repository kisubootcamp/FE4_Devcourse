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
    count(newVal, oldVal) {
      console.log('count 변경 됨!', newVal, oldVal)
    },
    amount() {
      console.log('amount 변경 됨!')
    },
    numArr: {
      handler(newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
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
  <h1>numArr: {{ numArr }}</h1>
  <button @click="numArr.push(3)">추가</button>
</template>
<style scoped></style>
