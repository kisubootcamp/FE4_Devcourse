<script>
export default {
  name: 'BaseButton',
  data() {
    return {
      text: 'Login',
    }
  },
}
</script>
<template>
  <button>
    <!-- 이름 없는 슬롯 -->
    <!-- 데이터 값 넘겨주기 -->
    <slot :text>
      <span>클릭</span>
    </slot>
  </button>
</template>
<style scoped>
span {
  color: skyblue;
}
</style>
