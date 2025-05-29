<script>
export default {
  name: 'App',
  data() {
    return {
      // 문제 1: 사용자 이름 입력 및 출력
      userName: '',
      // 문제 2: 체크박스를 이용한 회원가입 약관 동의
      isChecked: false,
      // 문제 3: 범위 슬라이더로 나이 조정
      age: 25,
      // 문제 4: 여러 줄 텍스트 입력 받기
      text: '',
      // 문제 5: 드롭다운에서 선택한 값 출력
      fruit: 'apple',
      // 문제 6: 여러 체크박스 선택
      selectedFruits: [],
      // 문제 7: 라디오 버튼으로 성별 선택
      gender: 'male',
      // 문제 8: 색상 선택기
      selectedColor: '#ffffff',
    }
  },
  methods: {
    changeName(e) {
      this.userName = e.target.value
    },
    changeText(e) {
      this.text = e.target.value
    },
  },
}
</script>
<template>
  <!-- 문제 1: 사용자 이름 입력 및 출력 -->
  <div>
    <p>이름 : {{ userName }}</p>
    <input type="text" @input="changeName" />
  </div>

  <!-- 문제 2: 체크박스를 이용한 회원가입 약관 동의 -->
  <div>
    <p>체크 : {{ isChecked }}</p>
    <input type="checkbox" v-model="isChecked" />이용약관에 동의합니다.
  </div>

  <!-- 문제 3: 범위 슬라이더로 나이 조정 -->
  <div>
    <p>{{ age }}</p>
    <input type="range" min="1" max="100" v-model="age" />
  </div>

  <!-- 문제 4: 여러 줄 텍스트 입력 받기 -->
  <div>
    <p>내용 : {{ text }}</p>
    <textarea type="text" @input="changeText"></textarea>
  </div>

  <!-- 웬만해서는 value값 써주기 -->
  <!-- 문제 5: 드롭다운에서 선택한 값 출력 -->
  <div>
    <p>{{ fruit }}</p>
    <select v-model="fruit">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
  </div>

  <!-- 문제 6: 여러 체크박스 선택 -->
  <div>
    <p>{{ selectedFruits.join(',') }}</p>
    <label> <input type="checkbox" v-model="selectedFruits" value="apple" />apple </label>
    <label> <input type="checkbox" v-model="selectedFruits" value="banana" />banana </label>
    <label> <input type="checkbox" v-model="selectedFruits" value="orange" />orange </label>
  </div>

  <!-- 문제 7: 라디오 버튼으로 성별 선택 -->
  <div>
    <p>성별 : {{ gender }}</p>
    <label> <input type="radio" value="male" v-model="gender" />남자 </label>
    <label> <input type="radio" value="female" v-model="gender" />여자 </label>
  </div>

  <!-- 문제 8: 색상 선택기 -->
  <div>
    <p>색상 : {{ selectedColor }}</p>
    <input type="color" v-model="selectedColor" />
    <div
      :style="{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: selectedColor,
      }"
    ></div>
  </div>
</template>
<style scoped></style>
