<script>
// 약속된 객체의 속성
// -- data: 뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속성
// 디렉티브
// - v-text
// - v-html
// - v-pre
// - v-bind (축약형 -> :)
// - v-if(v-else-if, v-else): 조건부 렌더링을 위한 속성. 순서대로 사용. 조건에 맞지 않으면 렌더링 자체가 X
// - v-show: 일치하지 않아도 렌더링은 시킴. ex) 토글로 보여졌다가 안보였다가 하는 것 같은 부분에 사용
// - v-for
export default {
  name: 'App',
  data() {
    return {
      condition: 'A',
      fruits: ['apple', 'banana', 'orange'],
      userObj: {
        name: '철수',
        age: 20,
      },
    }
  },
}
</script>
<template>
  <h1 v-if="condition === 'A'">A입니다.</h1>
  <h1 v-else-if="condition === 'B'">B입니다.</h1>
  <h1 v-else-if="condition === 'C'">C입니다.</h1>
  <h1 v-else>A ~ C는 아닙니다.</h1>
  <h1 v-show="condition === 'F'">F입니다.</h1>
  <!-- for문 2중첩까지만 하는걸 추천 -->
  <ul>
    <li v-for="value in fruits" :key="value">
      {{ value }}
      <ul>
        <li v-for="(value, key) in userObj" :key>key: {{ key }} - value: {{ value }}</li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
