<script>
export default {
  name: 'App',
  data() {
    return {
      status: 'error',
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'editor',
      logStatus: 'loggedOut',
      account: 'banned',
    }
  },
}
</script>
<template>
  <h1 v-if="status === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기중</h1>
  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
  <h1 v-if="role === 'admin'">관리자 메뉴</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴</h1>
  <h1 v-else-if="role === 'viewer'">읽기 전용 메뉴</h1>
  <h1 v-if="logStatus === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h1>
  <h1 v-else-if="logStatus === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h1>
  <h1 v-else-if="logStatus === 'loggedOut'">로그인 필요</h1>
  <h1 v-else-if="account === 'banned'">계정 정지</h1>
</template>
<style scoped></style>
