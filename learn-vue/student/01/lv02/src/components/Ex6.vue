<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Ex6',
  data() {
    return {
      status: 'inCart', //"inCart", "purchased", "abandoned"
    }
  },
}
</script>
<template>
  <div v-if="status === 'inCart'">장바구니에 상품이 있습니다.</div>
  <div v-else-if="status === 'purchased'">구매완료</div>
  <div v-else-if="status === 'abandoned'">구매가 취소되었습니다.</div>
</template>
