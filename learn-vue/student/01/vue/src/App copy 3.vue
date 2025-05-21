<script>
// 연습문제
export default {
  name: 'App',
  data() {
    return {
      condition: true,
      weather: 'sunny', // sunny, rainy, cloudy
      text: '<strong>HTML을 출력합니다!</strong>',
      // message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: false,
      message: 'sucoding',
      isGreeting: true,
      status: 'loggedIn', // loggedIn, loginRequired, fail
    }
  },
}
</script>
<template>
  <h1>Level 1) 연습문제</h1>
  <h3 v-if="condition === true">조건이 참입니다!</h3>

  <h3 v-if="weather === 'cloudy'">오늘은 날씨가 흐려요</h3>
  <h3 v-else-if="weather === 'rainy'">오늘은 비가 와요</h3>
  <h3 v-else>오늘은 날씨가 좋아요</h3>

  <h3 v-html="text"></h3>

  <!-- <h3 v-text="message"></h3> -->

  <h3 v-show="isVisible === true">조건이 참입니다!</h3>

  <h3 v-text="message"></h3>

  <h3 v-if="isGreeting === true">Hello</h3>
  <h3 v-else>Goodbye</h3>

  <h3 v-if="status === 'fail'">비밀번호 오류</h3>
  <h3 v-else-if="status === 'loginRequired'">로그인 필요</h3>
  <h3 v-else>로그인 중</h3>
</template>
<style scoped></style>
