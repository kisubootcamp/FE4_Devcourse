<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      isChecked: '',
      age: '25',
      text: '',
      select: 'apple',
      fruits: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    inputHandler(e) {
      this.name = e.target.value
    },
    textareaHanedler(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <h1>이름 : {{ name }}</h1>
  <h1>2번 {{ isChecked }}</h1>
  <h1>3번 {{ age }}</h1>
  <h1>4번 {{ text }}</h1>
  <input type="text" @input="inputHandler" />
  <label>
    <input type="checkbox" v-model="isChecked" true-value="true" false-value="false" />약관에
    동의합니다.
    <!-- <input type="checkbox" v-model="isChecked" /> 약관에 동의합니다.
    <p>{{isChecked ? "동의" : "비동의"}}</p> -->
  </label>

  <input type="checkbox" v-model="isChecked" />
  <input type="range" value="age" min="1" max="100" v-model="age" />
  <textarea @input="textareaHanedler"></textarea>

  <h1>5번 선택한 과일: {{ select }}</h1>
  <select v-model="select">
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="orange">orange</option>
  </select>

  <h1>6번 선택한 과일(중복가능): {{ fruits.join(', ') }}</h1>
  <label> <input type="checkbox" v-model="fruits" value="사과" />apple </label>
  <label> <input type="checkbox" v-model="fruits" value="바나나" />banana </label>
  <label> <input type="checkbox" v-model="fruits" value="오렌지" />orange </label>
  <h1>7번 성별 : {{ gender }}</h1>
  <label>
    <input type="radio" v-model="gender" value="male" name="male" />남성
    <input type="radio" v-model="gender" value="female" name="female" />여성
  </label>
  <h1>8번 선택한 색상: {{ color }}</h1>
  <label>
    <input type="color" v-model="color" />
  </label>
  <div
    :style="{ width: '100px', height: '100px', border: '1px solid black', backgroundColor: color }"
  ></div>
</template>
<style scoped></style>
