<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex1',
  data() {
    return {
      status: 'error', // "loading", "error", "success", "idle"
    }
  },
}
</script>
<template>
  <h1 v-if="status === 'loading'">데이터를 로딩 중입니다...</h1>
  <h1 v-else-if="status === 'error'">에러가 발생했습니다.</h1>
  <h1 v-else-if="status === 'success'">데이터 로딩 완료!</h1>
  <h1 v-else-if="status === 'idle'">대기중</h1>
</template>
