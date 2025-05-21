<script>
export default {
  name: "08",
  data() {
    return {
      status: "loggedIn",
    };
  },
};
</script>
<template>
  <div v-if="status === 'loggedIn'">로그인 중</div>
  <div v-else-if="status === 'loginRequired'">로그인 필요</div>
  <div v-else>비밀번호 오류</div>
</template>
<style scoped></style>
