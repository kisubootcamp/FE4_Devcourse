<script>
export default {
  name: 'App',
  data() {
    return {
      status: 'inCart', //"inCart", "purchased", "abandoned"
    }
  },
}
</script>
<template>
  <!-- code here -->
  <div v-if="status === 'inCart'">장바구니</div>
  <div v-else-if="status === 'purchased'">구매완료</div>
  <div v-else-if="status === 'abandoned'">장바구니 비우기</div>
</template>
<style scoped></style>
