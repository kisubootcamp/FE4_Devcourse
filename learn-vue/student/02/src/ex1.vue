<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      age: 25,
      message: '',
      fruit: 'apple',
      checked: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    handleChange(e) {
      this.name = e.target.value
    },
    handleChange2(e) {
      this.message = e.target.value
    },
  },
}
</script>
<template>
  <input type="text" :value="name" @input="handleChange" /> {{ name }} <br />

  <label>회원가입 약관에 동의합니다 <input type="checkbox" v-model="isChecked" /></label>
  <p>체크 상태: {{ isChecked ? '동의' : '비동의' }}</p>

  <span>나이: {{ age }}</span>
  <input type="range" v-model="age" min="1" max="100" />

  <p style="white-space: pre-line">{{ message }}</p>
  <textarea v-model="message" @input="handleChange2"></textarea> <br />

  <span>선택됨: {{ fruit }}</span>
  <select v-model="fruit">
    <option>apple</option>
    <option>banana</option>
    <option>orange</option>
  </select>

  <div>
    <label><input type="checkbox" v-model="checked" value="apple" /> apple </label>
    <label><input type="checkbox" v-model="checked" value="banana" />banana</label>
    <label><input type="checkbox" v-model="checked" value="orange " />orange </label>
    <p>{{ checked }}</p>
  </div>

  <div>
    <label><input type="radio" v-model="gender" value="male" /> 남자 </label>
    <label><input type="radio" v-model="gender" value="female" />여자</label>
    <p>{{ gender }}</p>
  </div>

  <input type="color" v-model="color" />
  <div
    :style="{
      width: '100px',
      height: '100px',
      border: '1px solid black',
      backgroundColor: color,
    }"
  ></div>
  <p>선택된 색상: {{ color }}</p>
</template>
<style scoped></style>
