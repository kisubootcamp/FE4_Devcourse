<script>
// data, methods -> 반응형 동작(카운터)
// 디렉티브 v-html, v-text, v-show, v-if..., v-memo, v-once
// v-model + form(input, submit, change, click, 수식어 .enter .tab .prevent)
// 계산된 속성(computed property)
export default {
  name: 'App',
  data() {
    return {
      firstName: 'Gildong',
      lastName: 'hong',
    }
  },
  computed: {
    // 데이터 속성을 활용해서 무언가 계산된 결과를 만들어 둘 때
    fullName() {
      return `${this.lastName} ${this.firstName}`
    },
  },
}
</script>
<template>
  <h1>{{ fullName }}</h1>
</template>
<style scoped></style>
