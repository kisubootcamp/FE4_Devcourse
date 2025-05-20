<script>
/*
- `"loggedIn"`, `"basic"`: "기본 계정으로 로그인 중"
- `"loggedIn"`, `"premium"`: "프리미엄 계정으로 로그인 중"
- `"loggedOut"`: "로그인 필요"
- `"banned"`: "계정 정지"
*/
export default {
  name: 'App',
  data() {
    return {
      status: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium
    }
  },
}
</script>
<template>
  <!-- code here -->
  <h1 v-if="status === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h1>
  <h1 v-else-if="status === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h1>
  <h1 v-else-if="status === 'loggedOut'">로그인 필요</h1>
  <h1 v-else-if="status === 'banned'">계정 정지</h1>
</template>
<style scoped></style>
