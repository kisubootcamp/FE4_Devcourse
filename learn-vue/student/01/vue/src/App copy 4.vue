<script>
// 연습문제
export default {
  name: 'App',
  data() {
    return {
      // status: 'error', // "loading", "error", "success", "idle"
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin', // "admin", "editor", "viewer"
      // status: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'premium', // basic, premium
      selectedOption: 'bold', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status: 'abandoned', //"inCart", "purchased", "abandoned"
    }
  },
}
</script>
<template>
  <h1>Level 2) 연습문제</h1>
  <!-- <h3 v-if="status === 'loading'">데이터를 로딩 중입니다...</h3>
  <h3 v-else-if="status === 'error'">에러가 발생했습니다.</h3>
  <h3 v-else-if="status === 'success'">데이터 로딩 완료!</h3>
  <h3 v-else-if="status === 'idle'">대기중</h3> -->

  <h3 v-if="isHtml === true" v-html="htmlContent"></h3>
  <h3 v-else v-text="plainContent"></h3>

  <h3 v-if="role === 'admin'">관리자 메뉴를 표시</h3>
  <h3 v-else-if="role === 'editor'">편집자 메뉴를 표시</h3>
  <h3 v-else-if="role === 'viewer'">읽기 전용 메뉴를 표시</h3>

  <!-- <h3 v-if="status === 'loggedIn'">
    <h3 v-if="account === 'basic'">기본 계정으로 로그인 중</h3>
    <h3 v-else-if="account === 'premium'">프리미엄 계정으로 로그인 중</h3>
  </h3>

  <h3 v-if="status === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h3>
  <h3 v-else-if="status === 'loggedIn'" && account === 'premium'">프리미엄 계정으로 로그인 중</h3>
  <h3 v-else-if="status === 'loggedOut'">로그인 필요</h3>
  <h3 v-else-if="status === 'banned'">계정 정지</h3> -->

  <h3 v-if="selectedOption === 'bold'" v-html="messageHTML"></h3>
  <h3 v-else-if="selectedOption === 'italic'" v-html="messageItalic"></h3>

  <h3 v-if="status === 'inCart'">장바구니에 상품이 있습니다.</h3>
  <h3 v-else-if="status === 'purchased'">구매 완료</h3>
  <h3 v-else-if="status === 'abandoned'">구매가 취소되었습니다.</h3>
</template>
<style scoped></style>
