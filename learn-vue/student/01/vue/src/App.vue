<script>
// Options API (2.x) / Composition API (3.x)
// 클래스 컴포넌트 / 함수형 컴포넌트
// Options API의 특징 - 약속된 객체의 속성
// -- data : 뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속송
// 디렉티브
// v-text
// v-html
// v-pre
// v-bind (축약형 -> :)
// v-if (v-else-if, v-else)
// v-show
// v-for
export default {
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
  <ul>
    <li v-for="value in fruits" :key="value">
      {{ value }}
      <ul>
        <li v-for="(value, key) in userObj" :key>key: {{ key }} - value:{{ value }}</li>
      </ul>
    </li>
  </ul>
</template>
<style scoped></style>
