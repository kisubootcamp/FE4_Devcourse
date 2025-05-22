<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 25,
      texts: '',
      fruit: 'apple',
      fruits: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    handleNameChange(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <!-- 1번 -->
  <h1>이름 입력: {{ name }}</h1>
  <input type="text" v-model="name" @input="handleNameChange" />

  <!-- 2번 -->
  <h1>{{ isChecked ? '동의' : '비동의' }}</h1>
  <label>
    <input type="checkbox" v-model="isChecked" />
    회원가입 약관에 동의합니다
  </label>

  <!-- 3번 -->
  <h1>선택된 나이: {{ age }}</h1>
  <input type="range" v-model="age" min="1" max="100" />

  <!-- 4번 -->
  <h1>입력한 내용: {{ texts }}</h1>
  <textarea v-model="texts"></textarea>

  <!-- 5번 -->
  <h1>선택한 과일: {{ fruit }}</h1>
  <select v-model="fruit">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>

  <!-- 6번 -->
  <h1>선택한 과일: {{ fruits.join(', ') }}</h1>
  <label><input type="checkbox" v-model="fruits" value="apple" /> apple</label>
  <label><input type="checkbox" v-model="fruits" value="banana" /> banana</label>
  <label><input type="checkbox" v-model="fruits" value="orange" /> orange</label>

  <!-- 7번 -->
  <h1>선택한 성별: {{ gender }}</h1>
  <label><input type="radio" value="male" v-model="gender" /> 남성</label>
  <label><input type="radio" value="female" v-model="gender" /> 여성</label>

  <!-- 8번 -->
  <br />
  <br />
  <input type="color" v-model="color" />
  <div
    :style="{
      width: '100px',
      height: '100px',
      border: '1px solid black',
      backgroundColor: color,
    }"
  ></div>
</template>
<style scoped></style>
