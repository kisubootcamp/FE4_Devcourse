<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: false,
      agree: '비동의',
      age: 25,
      text: '',
      fruit: 'apple',
      fruits: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    changeNameHandler(e) {
      this.name = e.target.value
    },
    changeCheckHandler() {
      if (this.isChecked === true) this.agree = '동의'
      else this.agree = '비동의'
    },
    changeTextHandler(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <h1>폼 요소 제어하기 - 연습문제</h1>
  <h3>이름: {{ name }}</h3>
  <h3>약관 동의: {{ agree }}</h3>
  <h3>나이: {{ age }}</h3>
  <h3>내용: {{ text }}</h3>
  <h3>과일: {{ fruit }}</h3>
  <h3>과일 여러개 가능: {{ fruits.join(', ') }}</h3>
  <h3>성별: {{ gender }}</h3>
  <div
    :style="{ width: '100px', height: '100px', border: '1px solid black', backgroundColor: color }"
  ></div>

  <form>
    <!-- 1 -->
    <input type="text" @input="changeNameHandler" />
    <br />
    <!-- 2 -->
    <label
      ><input type="checkbox" v-model="isChecked" @change="changeCheckHandler" />회원가입 약관
      동의</label
    >
    <br />
    <!-- 3 -->
    <input type="range" v-model="age" min="1" max="100" />
    <br />
    <!-- 4 -->
    <textarea @input="changeTextHandler"></textarea>
    <br />
    <!-- 5 -->
    <select v-model="fruit">
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="orange">오렌지</option>
    </select>
    <br />
    <!-- 6 -->
    <div>
      <label><input type="checkbox" v-model="fruits" value="apple" />사과</label>
      <label><input type="checkbox" v-model="fruits" value="banana" />바나나</label>
      <label><input type="checkbox" v-model="fruits" value="orange" />오렌지</label>
    </div>
    <br />
    <!-- 7 -->
    <div>
      <label><input type="radio" v-model="gender" name="gender" value="male" />남자</label>
      <label><input type="radio" v-model="gender" name="gender" value="female" />여자</label>
    </div>
    <br />
    <!-- 8 -->
    <div>
      <input type="color" v-model="color" />
    </div>
  </form>
</template>
<style scoped></style>
