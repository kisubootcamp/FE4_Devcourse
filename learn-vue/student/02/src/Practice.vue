<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 25,
      text: '',
      selectedOption: 'apple',
      selectedItems: [],
      gender: 'male',
      selectedColor: '#ffffff',
    }
  },
  methods: {
    nameHandler(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <!-- 1 -->
  <input type="text" :value="name" @input="nameHandler" />
  <p>{{ name }}</p>

  <!-- 2 -->
  <label>
    <input type="checkbox" v-model="isChecked" />
    회원가입 약관에 동의합니다
  </label>
  <p>{{ isChecked ? '동의' : '비동의' }}</p>

  <!-- 3 -->
  <input type="range" min="1" max="100" v-model="age" />
  <p>{{ age }}</p>

  <!-- 4 -->
  <textarea v-model="text"></textarea>
  <p>{{ text }}</p>

  <!-- 5 -->
  <select v-model="selectedOption">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>
  <p>{{ selectedOption }}</p>

  <!-- 6 -->
  <label>
    <input type="checkbox" v-model="selectedItems" value="apple" />
    apple
  </label>
  <label>
    <input type="checkbox" v-model="selectedItems" value="banana" />
    banana
  </label>
  <label>
    <input type="checkbox" v-model="selectedItems" value="orange" />
    orange
  </label>
  <p>{{ selectedItems.join(', ') }}</p>

  <!-- 7 -->
  <label>
    <input type="radio" v-model="gender" name="gender" value="male" />
    남자
  </label>
  <label>
    <input type="radio" v-model="gender" name="gender" value="female" />
    여자
  </label>
  <p>{{ gender }}</p>

  <!-- 8 -->
  <input type="color" v-model="selectedColor" />
  <div
    :style="{
      width: '100px',
      height: '100px',
      border: '1px solid black',
      backgroundColor: selectedColor,
    }"
  ></div>
  <p>{{ selectedColor }}</p>
</template>
<style scoped></style>
