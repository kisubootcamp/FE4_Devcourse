<script>
export default {
  name: 'App',
  data() {
    return {
      weather: "sunny",
      message: "<strong>HTML을 출력합니다!</strong>",
      isVisible: true,
      string:"sucoding",
      isGreeting: false,
      status: "loggedIn"
    }
  },
}
</script>
<template>
  <h1 v-if="true">조건이 참입니다!</h1>
  <h1 v-if="weather==='sunny'">weather={{weather}}</h1>
  <h1 v-else-if="weather==='rainy'">weather={{weather}}</h1>
  <h1 v-else-if="weather==='cloudy'">weather={{weather}}</h1>
  <h1 v-html="message"></h1>
  <h1 v-text="message"></h1>
  <h1 v-show="isVisible">조건이 참 입니다!</h1>
  <h1 v-text="string"></h1>
  <h1 v-if="isGreeting">Hello</h1>
  <h1 v-else-if="!isGreeting">Goodbye</h1>
  <h1 v-if="status==='loggedIn'">로그인 중</h1>
  <h1 v-else-if="status==='loginRequired'">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>
<style scoped></style>
