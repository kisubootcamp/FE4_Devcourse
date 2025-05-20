<script>
// Options API(2.x) / Composition API (3.x)
// 약속된 객체의 속성
// --data : 뷰애서 사용할 데이터(상태)를 정의할 때 사용하는 속성
// 디렉티브
// -- v-html
// -- v-text
// -- v-pre
// - v-bind
// - v-if
export default {
  name: 'App',
  data() {
    return {
      name: 'sucoding',
      age: 20,
      isShow: true,
      condition: 'A',
      fruits: ['apple', 'banana', 'orange'],
    }
  },
}
</script>
<template>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ 10 + 20 }}</h1>
  <h1 v-show="condition === 'F'">F입니다</h1>
</template>
<style scoped></style>
ㅁㅇㄴ
