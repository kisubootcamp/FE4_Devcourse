<script>
export default {
  name: "06",
  data() {
    return {
      status: "inCart",
    };
  },
};
</script>
<template>
  <div v-if="status === 'inCart'">장바구니에 상품이 있습니다</div>
  <div v-else-if="status === 'purchased'">구매 완료</div>
  <div v-else-if="status === abandoned">구매가 취소되었습니다</div>
</template>
<style scoped></style>
