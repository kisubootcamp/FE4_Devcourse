<script>
export default {
  name: 'App',
  data() {
    return {
      ex1: true,
      weather: 'sunny',
      ex3: '<strong>HTML을 출력합니다!</strong>',
      ex4msg: '<strong>HTML을 출력합니다!</strong>',
      isVisible: true,
      ex6msg: 'sucoding',
      isGreeting: false,
      status: 'fail', // loginRequired, fail
    }
  },
}
</script>
<template>
  <h1 v-if="ex1 === true">조건이 참입니다!</h1>
  <h1 v-if="weather === 'sunny'">오늘의 날씨는 맑습니다!</h1>
  <h1 v-else-if="weather === 'rainy'">오늘의 날씨는 비가 옵니다..</h1>
  <h1 v-else>오늘의 날씨는 흐립니다.</h1>
  <h1 v-html="ex3"></h1>
  <h1 v-text="ex4msg"></h1>
  <h1 v-show="isVisible">조건이 참입니다!</h1>
  <h1 v-text="ex6msg"></h1>
  <h1 v-if="isGreeting === true">Hello</h1>
  <h1 v-else>Goodbye</h1>
  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>
<style scoped></style>
