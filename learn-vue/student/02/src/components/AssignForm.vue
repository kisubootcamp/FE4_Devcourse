<script>
export default {
  name: 'AssignForm',
  data() {
    return {
      name: '',
      isChecked: 'false',
      age: 25,
      text: '',
      fruit: 'apple',
      fruits: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    changeHandler(e) {
      this.name = e.target.value
    },
    textChange(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <p>문제 1</p>
  <h1>{{ name }}</h1>
  <input type="text" @input="changeHandler" />

  <p>문제 2</p>
  <h1>{{ isChecked ? '동의' : '비동의' }}</h1>
  <input type="checkbox" v-model="isChecked" />
  약관에 동의힙니다.

  <p>문제 3</p>
  <h1>{{ age }}</h1>
  <input type="range" v-model="age" min="1" max="100" />

  <p>문제 4</p>
  <h1>{{ text }}</h1>
  <input type="textarea" @input="textChange" />

  <p>문제 5</p>
  <h1>{{ fruit }}</h1>
  <select v-model="fruit">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>

  <p>문제 6</p>
  <div>
    <label> <input type="checkbox" v-model="fruits" value="apple" />apple </label>
    <label> <input type="checkbox" v-model="fruits" value="banana" />banana </label>
    <label> <input type="checkbox" v-model="fruits" value="orange" />orange </label>
    <h1>{{ fruits }}</h1>
  </div>

  <p>문제 7</p>
  <h1>{{ gender }}</h1>
  <input type="radio" v-model="gender" value="male" />male
  <input type="radio" v-model="gender" value="female" />female

  <p>문제 8</p>
  <h1>{{ color }}</h1>
  <div
    :style="{ width: '100px', height: '100px', border: '1px solid black', backgroundColor: color }"
  ></div>
  <input type="color" v-model="color" />
</template>
<style scoped></style>
