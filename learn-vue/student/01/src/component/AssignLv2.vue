<script>
export default {
  name: 'AssignLv2',
  data() {
    return {
      status: 'error', // "loading", "error", "success", "idle"
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'adim', // "admin", "editor", "viewer"
      status2: 'banned', //"loggedIn", "loggedOut", "banned"
      account: 'premium', // basic, premium
      selectedOption: 'italic', // 'bold'. 'italic'
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>',
      status3: 'abandoned', //"inCart", "purchased", "abandoned"
    }
  },
}
</script>
<template>
  <p>연습문제 1</p>
  <h1 v-if="status === 'loading'">데이터를 로딩중입니다.</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기중...</h1>

  <p>연습문제 2</p>
  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-html="plainContent"></h1>

  <p>연습문제 3</p>
  <h1 v-if="role === 'admin'">관리자메뉴표시</h1>
  <h1 v-else-if="role === 'editor'">편집자메뉴표시</h1>
  <h1 v-else>읽기전용메뉴표시</h1>

  <p>연습문제 4</p>
  <!-- <div v-if="status2 === 'loggedIn'">
    <h1 v-if="account === 'basic'">기본 계정으로 로그인 중</h1>
    <h1 v-else>프리미엄 계정으로 로그인 중</h1>
  </div> -->
  <h1 v-if="status2 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h1>
  <h1 v-if="status2 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h1>
  <h1 v-else-if="loggedOut">로그인 필요</h1>
  <h1 v-else>계정 정지</h1>

  <p>연습문제 5</p>
  <h1 v-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
  <h1 v-else v-html="messageHTML"></h1>

  <p>연습문제 6</p>
  <h1 v-if="status3 === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status3 === 'purchased'">구매완료</h1>
  <h1 v-else>구매가 취소되었습니다.</h1>
</template>
<style scoped></style>
