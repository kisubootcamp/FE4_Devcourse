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
  <!-- code here -->
  <h1 v-if="status === loggedIn">로그인 중</h1>
  <h1 v-else-if="status === loginRequired">로그인 필요</h1>
  <h1 v-else>비밀번호 오류</h1>
</template>
