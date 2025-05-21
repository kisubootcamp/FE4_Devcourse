<script>
export default {
  name: 'App',
  data() {
    return {
      status: 'loggedIn', // loginRequired, fail
    }
  },
}
</script>
<template>
  <div v-if="status === 'loggedIn'">
    <h1>로그인 성공</h1>
  </div>
  <div v-else-if="status === 'loginRequired'">
    <h1>로그인이 필요합니다.</h1>
  </div>
  <div v-else-if="status === 'fail'">
    <h1>비밀번호 오류.</h1>
  </div>
</template>
