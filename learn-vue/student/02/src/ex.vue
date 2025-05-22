<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 25,
      text: '',
      fruit: 'apple',
      fruits: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    inputChangeHandler(e) {
      this.name = e.target.value
    },
    textChangeHandler(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <h1>name : {{ name }}</h1>
  <input type="text" @input="inputChangeHandler($event)" />
  <hr />
  <h1>{{ isChecked }}</h1>
  <label>
    <input type="checkbox" v-model="isChecked" />
    <span>회원가입 약관에 동의합니다</span>
  </label>
  <hr />
  <h1>{{ age }}</h1>
  <input type="range" v-model="age" min="1" max="100" />
  <hr />
  <h1>{{ text }}</h1>
  <textarea v-model="text" @input="textChangeHandler($event)"></textarea>
  <hr />
  <h1>{{ fruit }}</h1>
  <select v-model="fruit">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>
  <hr />
  <h1>{{ fruits }}</h1>
  <input type="checkbox" value="apple" v-model="fruits" />
  <input type="checkbox" value="banana" v-model="fruits" />
  <input type="checkbox" value="orange" v-model="fruits" />
  <hr />
  <h1>{{ gender }}</h1>
  <label>
    <input type="radio" value="male" v-model="gender" />
    male
  </label>
  <label>
    <input type="radio" value="female" v-model="gender" />
    female
  </label>
  <hr />
  <div
    style="width: 100px; height: 100px; border: 1px solid black"
    :style="{ backgroundColor: color }"
  ></div>
  <input type="color" v-model="color" />
</template>
<style scoped></style>
