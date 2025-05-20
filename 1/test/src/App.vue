<script>
export default {
  name: 'App',
  data() {
    return {
      weather: 'sunny', // rainy, cloudy
      html: '<strong>HTML을 출력합니다!</strong>',
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: false,
      message2: 'sucoding',
      isGreeting: true,
      status: 'loggedIn', // loginRequired, fail
    }
  },
}
</script>
<template>
  <h1 v-if="true">조건이 참입니다!</h1>

  <h1 v-if="weather === 'sunny'">sunny</h1>
  <h1 v-else-if="weather === 'rainy'">sunny</h1>
  <h1 v-else>sunny</h1>

  <h1 v-html="html"></h1>

  <h1 v-text="message"></h1>

  <h1 v-show="isVisible === 'true'">조건이 참입니다!</h1>

  <h1 v-text="message2"></h1>

  <h1 v-if="isGreeting === true">Hello</h1>
  <h1 v-else-if="isGreeting === false">Goodbye</h1>

  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status != 'loggedIn'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>
<style scoped></style>
