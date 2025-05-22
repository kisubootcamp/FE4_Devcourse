<script>
export default {
  name: 'App',
  data() {
    return {
      // count: 0,
      // email: '',
      name: '',
      isChecked: false,
      age: 25,
      text: '',
      selectedOption: 'apple',
      selectedItem: [],
      gender : 'female',
      selectedColor: "#ffffff"
    }
  },
  methods: {
    //실습 정리
    // printHello: function (string) {
    //   console.log(string)
    // },
    // decrement() {
    //   this.count -= 1
    // },
    // reset() {
    //   this.count = 0
    // },
    // increment() {
    //   this.count += 1
    // },
    // onKeyupHandler(event) {
    //   if (event.keyCode === 13) {
    //     console.log('enter')
    //   }
    // },
    // handleSubmit() {
    //   console.log(this.email)
    // },
    // changeHandler(e) {
    //   this.email = e.target.value
    // },
    //연습 문제 풀이
  },
}
</script>
<template>
  <!-- <h1>App</h1>
  <button @click="printHello('hi')">하이!</button>
  <h1>{{ count }}</h1>
  <button @click="decrement">감소</button>
  <button @click="reset">리셋</button>
  <button @click="increment">증가</button>
  <input type="text" @keyup="onKeyupHandler($event)" />
  <form @submit.prevent="handleSubmit">
    <input type="text" name="email" v-model="email" />
    <button>전송</button> -->
  <!-- </form> -->

  <div>
    <input type="text" :value="name" @input="handleNameChange" />
    <p>{{ name }}</p>
  </div>

  <div>
    <label>
      <input type="checkbox" v-model="isChecked" />
      약관에 동의합니다.
    </label>
    <p>{{ isChecked ? '동의' : '비동의' }}</p>
  </div>

  <div>
    <input type="range" v-model="age" min="1" max="100" />
    <p>{{ age }}</p>
  </div>

  <div>
    <textarea v-model="text"></textarea>
    <p>{{ text }}</p>
  </div>

  <div>
    <select v-model="selectedOption">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>{{ selectedOption }}</p>
  </div>

  <div>
    <label>
      <input type="checkbox" v-model="selectedItem" value="apple">apple</input>
      <input type="checkbox" v-model="selectedItem" value="banana">banana</input>
      <input type="checkbox" v-model="selectedItem" value="orange">orange</input>
      <p>{{ selectedItem.join(',') }}</p>
    </label>
  </div>

  <div>
    <label>
      <input v-model="gender" type="radio" name="gender" value="male"/>
      <input v-model="gender" type="radio" name="gender" value="female"/>
    </label>
    <p> {{ gender }}</p>
  </div>

  <div>

    <input type="color" v-model="selectedColor"/>
    <div :style="{width: '100px', height: '100px', border: '1px solid black', backgroundColor : selectedColor}">
    </div>
    <p>{{ selectedColor }}</p>
  </div>


  
</template>
<style scoped></style>
