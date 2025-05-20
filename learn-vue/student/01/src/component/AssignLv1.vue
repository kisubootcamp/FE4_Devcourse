<script>
export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      weather: 'sunny', // rainy, cloudy
      message: '<strong>HTML을 출력합니다!</strong>',
      condition: true,
      message2: 'sucoding',
      isGreeting: true,
      status: 'loggedIn',
    }
  },
}
</script>
<template>
  <p>연습문제1</p>
  <h1 v-if="isShow">조건이 참입니다!</h1>

  <p>연습문제2</p>
  <h1 v-if="weather === 'sunny'">Today is sunny.</h1>
  <h1 v-else-if="weather === 'rainy'">Today is rainy.</h1>
  <h1 v-else-if="weather === 'cloudy'">Today is cloudy.</h1>

  <p>연습문제3</p>
  <h1 v-html="message"></h1>

  <p>연습문제4</p>
  <h1 v-text="message"></h1>

  <p>연습문제5</p>
  <h1 v-show="condition">"조건이 참입니다"</h1>

  <p>연습문제6</p>
  <h1 v-text="message2"></h1>

  <p>연습문제7</p>
  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-else>Goodbye</h1>

  <p>연습문제8</p>
  <h1 v-if="status === 'loggedIn'">로그인중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인필요</h1>
  <h1 v-else>비밀번호오류</h1>
</template>
<style scoped></style>
