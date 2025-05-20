<script>
export default {
  name: 'App',
  data() {
    return {
      status: 'error',
      isHtml: true,
      htmlContent: '<b>HTML을 사용한 텍스트</b>',
      plainContent: 'HTML을 사용하지 않은 텍스트',
      role: 'admin',
      status2: 'loggedOut',
      account: 'premium',
      selectedOption: 'bold',
      messageHTML: '<strong>텍스트</strong>',
      messageItalic: '<em>텍스트</em>R',
      status3: 'abandoned',
    }
  },
}
</script>
<template>
  <h1 v-if="status === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터를 로딩 완료!</h1>
  <h1 v-else>대기 중</h1>
  <hr />

  <h1 v-if="isHtml" v-html="htmlContent"></h1>
  <h1 v-else v-text="plainContent"></h1>
  <hr />

  <h1 v-if="role === 'admin'">관리자 메뉴</h1>
  <h1 v-else-if="role === 'editor'">편집자 메뉴</h1>
  <h1 v-else>읽기 전용 메뉴</h1>
  <hr />

  <h1 v-if="status2 === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</h1>
  <h1 v-else-if="status2 === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</h1>
  <h1 v-else-if="status2 === 'loggedOut'">로그인 필요</h1>
  <h1 v-else>계정 정지</h1>
  <hr />

  <h1 v-if="selectedOption === 'italic'" v-html="messageItalic"></h1>
  <h1 v-else v-html="messageHTML"></h1>
  <hr />

  <h1 v-if="status3 === 'inCart'">장바구니에 상품이 있습니다.</h1>
  <h1 v-else-if="status3 === 'purchased'">구매 완료</h1>
  <h1 v-else>구매가 취소되었습니다</h1>
</template>
<style scoped></style>
