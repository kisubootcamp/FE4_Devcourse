<script>
import TextLength from './TextLength.vue'

export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 25,
      textarea: '',
      fruit: '',
      fruits: [],
      gender: 'male',
      color: 'red',
    }
  },
  methods: {
    handleChangeName(e) {
      this.name = e.target.value
    },
    handleChangeChecked() {
      this.isChecked = !this.isChecked
    },
    handleChangeText(e) {
      this.textarea = e.target.value
    },
  },
  components: {
    TextLength,
  },
}
</script>
<template>
  <!-- 1번 문제 -->
  <h1>이름: {{ name }}</h1>
  <input type="text" value="name" @input="handleChangeName" />
  <br />
  <!-- 2번 문제 -->
  <h1>{{ isChecked }}</h1>
  <input
    type="checkbox"
    name="signup"
    id="signup"
    value="isChecked"
    @change="handleChangeChecked"
  />
  <label for="signup">회원가입 약관에 동의합니다</label>
  <br />
  <!-- 3번 문제 -->
  <h1>나이 : {{ age }}</h1>
  <input type="range" min="1" max="100" v-model="age" />
  <br />
  <!-- 4번 문제 -->
  <div>{{ textarea }}</div>
  <textarea @input="handleChangeText"></textarea>
  <br />
  <!-- 5번 문제 -->
  <h1>{{ fruit }}</h1>
  <select v-model="fruit">
    <option value="사과">사과</option>
    <option value="포도">포도</option>
    <option value="귤">귤</option>
  </select>
  <br />
  <!-- 6번 문제 -->
  <label>
    <input type="checkbox" value="apple" v-model="fruits" />
  </label>
  <label>
    <input type="checkbox" value="banana" v-model="fruits" />
  </label>
  <label>
    <input type="checkbox" value="cherry" v-model="fruits" />
  </label>
  <br />
  <!-- 7번 -->
  <h1>성별:{{ gender }}</h1>
  <label>
    <input v-model="gender" type="radio" name="gender" value="male" />
    <input v-model="gender" type="radio" name="gender" value="female" />
  </label>
  <br />
  <!-- 8번 -->
  <input type="color" v-model="color" />
  <div :style="{ whith: '100px', height: '100px', backgroundColor: color }"></div>
  <p>{{ color }}</p>
  <br />
  <!-- 글자수 세기 -->
  <div>
    <TextLength />
  </div>
</template>
<style scoped></style>
