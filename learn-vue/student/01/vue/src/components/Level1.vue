<script>
export default {
  name: 'App',
  data() {
    return {
      weather: 'cloudy', //rainy, cloudy
      message: '<strong>HTML을 출력합니다!</strong>',
      isVisible: true,
      message2: 'sucoding',
      isGreeting: true,
      status: 'loggedIn',
    }
  },
}
</script>
<template>
  <h1 v-if="true">조건이 참입니다!</h1>
  <hr />

  <h1 v-if="weather === 'sunny'">맑음</h1>
  <h1 v-else-if="weather === 'rainy'">비 내림</h1>
  <h1 v-else>흐림</h1>
  <hr />

  <h1 v-html="message"></h1>
  <hr />

  <h1 v-text="message"></h1>
  <hr />

  <h1 v-show="isVisible">조건이 참입니다!</h1>
  <hr />

  <h1 v-text="message2"></h1>
  <hr />

  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-else>Goodbye</h1>
  <hr />

  <h1 v-if="status === 'loggedIn'">로그인 중</h1>
  <h1 v-else-if="status === 'loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>
<style scoped></style>
