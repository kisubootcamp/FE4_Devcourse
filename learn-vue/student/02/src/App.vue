<script>
export default {
  name: 'App',
  data() {
    return {
      // count: 10,
      // amount: 0,
      // email: '',
      // password: '',
      // checked: false,
      // fruits: [],
      drink: '',
      price: '',
    }
  },

  // 함수
  methods: {
    // decrement() {
    //   this.count -= 1
    // },
    // reset() {
    //   this.count = 0
    // },
    // incrementByCount() {
    //   this.count += 1
    // },
    // incrementByAmount() {
    //   this.amount += 1
    // },
    // incrementByAmount(amount) {
    //   this.count += amount
    // },
    // onKeyupHandler() {
    //   console.log('Enter')
    // },
    // onSubmitHandler(event) {},

    // handleSubmit() {
    //   console.log(this.email)
    //   console.log(this.pw)
    // },
    changeHandler(e) {
      this.text = e.target.value
    },

    handleDrinkChange() {
      if (this.drink === 'americano') this.price = 1000
      else if (this.drink === 'latte') this.price = 1500
      else if (this.drink === 'juice') this.price = 3000
    },
  },
}
</script>
<template>
  <!-- <h1>Count: {{ count }}</h1>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
  <button @click="incrementByAmount(10)">10씩 증가</button> -->

  <!-- 이벤트 수식어(modifier) -->
  <!-- 이벤트의 처리 방식을 제어하는 데 사용하는 기능 -->
  <!-- <form @submit.prevent="onSubmitHandler">
    <input type="text" @keydown.enter="onKeyupHandler($event)" />
    <input type="text" @keydown.alt.enter="onKeyupHandler($event)" />
    <button type="submit">전송</button>
  </form> -->

  <!-- <h1 v-once>Count: {{ count }}</h1> -->

  <!-- <div v-memo="[count]">
    <h1>Count: {{ count }}</h1>
    <button @click="incrementByCount">count</button>
    <h1>Amount: {{ amount }}</h1>
    <button @click="incrementByAmount">increment</button>
  </div> -->

  <!-- v-model : input type에서 file만 사용할 수 없다.-->
  <!-- <h1>email: {{ email }}</h1> -->
  <!-- <input type="text" @input="changeHandler" />
  <input type="text" v-model="email" />
  {{ email.length }} -->

  <!-- <p>선택한 과일: {{ fruits }}</p>
  <div>
    <label><input type="checkbox" v-model="fruits" value="사과" />사과</label>
    <label><input type="checkbox" v-model="fruits" value="바나나" />바나나</label>
    <label><input type="checkbox" v-model="fruits" value="오렌지" />오렌지</label>
  </div> -->

  <!-- submit, click, input, change, keydown(keyup) + .enter -->
  <h1>{{ drink }} / {{ price }}</h1>
  <form @submit.prevent></form>
  <button v-on:click="console.log('hello')">클릭</button>
  <input type="text" @input="changeHandler" />
  <select v-model="drink" @change="handleDrinkChange">
    <option value="">선택하세요</option>
    <option value="americano">아메리카노(1000)</option>
    <option value="latte">라떼(1500)</option>
    <option value="juice">주스(2000)</option>
  </select>
</template>
<style scoped></style>
