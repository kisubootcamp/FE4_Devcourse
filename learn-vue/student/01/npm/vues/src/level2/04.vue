<script>
export default {
  name: "04",
  data() {
    return {
      status: "loggedIn",
      account: "basic",
    };
  },
};
</script>
<template>
  <div v-if="status === 'loggedIn'">
    <div v-if="account === 'basic'">기본 계정으로 로그인</div>
    <div v-if="account === 'premium'">프리미엄 계정으로 로그인</div>
  </div>
  <div v-else-if="loggedOut">로그인 필요</div>
  <div v-else-if="banned">계정 정지</div>
</template>
<style scoped></style>
