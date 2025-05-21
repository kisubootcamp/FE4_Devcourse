<script>
export default {
  name: 'App',
  data() {
    return {
      lev2Status: 'idle',
      isHtml: false,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin', // "admin", "editor", "viewer"
      ex4Status: 'loggedOut', //"loggedIn", "loggedOut", "banned"
      ex4Account: 'premium', // basic, premium
      selectedOption: 'bold', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      l2ex6Status: 'inCart', //"inCart", "purchased", "abandoned"
    }
  },
}
</script>
<template>
  <h1 v-if="lev2Status === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="lev2Status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="lev2Status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="lev2Status === 'idle'">대기중</h1>
  <h1 v-if="isHtml === true" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
  <h1 v-if="role === 'admin'">관리자 메뉴를 표시</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴를 표시</h1>
  <h1 v-else-if="role === 'viewer'">읽기 전용 메뉴를 표시</h1>
  <h1 v-if="ex4Status === 'loggedIn' && ex4Account === 'basic'">기본 계정으로 로그인중</h1>
  <h1 v-else-if="ex4Status === 'loggedIn' && ex4Account === 'premium'">
    프리미엄 계정으로 로그인중
  </h1>
  <h1 v-else-if="ex4Status === 'loggedOut'">로그인 필요</h1>
  <h1 v-else-if="ex4Status === 'banned'">계정 정지</h1>
  <h1 v-if="selectedOption === 'bold'" v-html="messageHTML"></h1>
  <h1 v-else-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
  <h1 v-if="l2ex6Status === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="l2ex6Status === 'purchased'">구매 완료</h1>
  <h1 v-else-if="l2ex6Status === 'abandoned'">구매가 취소되었습니다.</h1>
</template>
<style scoped></style>
