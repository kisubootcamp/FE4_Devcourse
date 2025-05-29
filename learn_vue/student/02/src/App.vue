<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      amount: 0,
      email: '',
      fruits: 'apple',
    }
  },
  // 함수
  methods: {
    printHaha: function () {
      console.log('haha')
    },
    printHello: function (name) {
      console.log(name)
    },
    // 증감
    decrement() {
      this.count -= 1
    },
    increment() {
      this.count += 1
    },
    reset() {
      this.count = 0
    },
    incrementByAmount() {
      this.amount += 1
    },

    // input
    onKeyupHandler(event) {
      if (event.keyCode === 13) {
        console.log('Enter!')
      }
    },
    handleSubmit() {
      console.log(this.email)
    },
    changeHandler(e) {
      this.email = e.target.value
    },
  },
}
</script>
<template>
  <button v-on:click="printHello">클릭!</button>
  <!-- 축약형 -->
  <button @click="printHello">클릭!</button>
  <button
    @click="
      () => {
        printHaha()
        printHello('sucoding')
      }
    "
  >
    수코딩
  </button>
  <button @click="printHello('handsome')">핸섬</button>

  <!-- 증감 -->
  <!-- <h1>Count : {{ count }}</h1>
  <button @click="decrement">감소</button>
  <button @click="increment">증가</button>
  <button @click="reset">리셋</button>
  <button @click="incrementByAmount(10)">10씩 증가</button> -->

  <!-- memoization, 리랜더링 안됨 -->
  <h1 v-once>Count : {{ count }}</h1>

  <!-- input -->
  <input type="text" @keyup="onKeyupHandler($event)" />

  <div v-memo="[count]">
    <h1>Count : {{ count }}</h1>
    <button @click="increment">증가</button>
    <h1>Amount : {{ amount }}</h1>
    <button @click="incrementByAmount">amount</button>
  </div>

  <!-- v-model -->
  <h1>email : {{ email }}</h1>
  <input type="text" @input="changeHandler" /> {{ email.length }}
  <!-- <input type="text" v-model="email" /> -->

  <h1>{{ fruits }}</h1>
  <form @submit.prevent="handleSubmit">
    <!-- <input type="text" name="email" v-model="email" />
    <input type="text" name="email" v-model="email" /> -->
    <select v-model="fruits">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
  </form>
</template>
<style scoped></style>
