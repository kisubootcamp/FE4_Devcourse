<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex4',
  data() {
    return {
      status: 'loggedIn', //"loggedIn", "loggedOut", "banned"
      account: 'basic', // basic, premium
    }
  },
}
</script>
<template>
  <div v-if="status === 'loggedIn' && account === 'basic'">기본 계정으로 로그인 중</div>
  <div v-else-if="status === 'loggedIn' && account === 'premium'">프리미엄 계정으로 로그인 중</div>
  <div v-else-if="status === 'loggedOut'">로그인 필요</div>
  <div v-else-if="status === 'banned'">계정 정지</div>
</template>
