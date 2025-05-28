<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<template>
  <!-- slot에 의무적으로 어떤 내용을 넣어줄 필요는 없음 -->
  <!-- 정의만 해놓고 안 써도 됨 -->
  <slot name="header">
    <!-- 내용을 넣어주지 않으면 기본으로 보이게 할 내용을 지정할 수 있음 -->
    <header>
      <h1>default slot</h1>
    </header>
  </slot>
  <!-- 이름을 별도로 지정해주지 않으면 default slot으로 들어감 -->
  <!-- <slot></slot> -->
  <slot name="default"></slot>
  <slot name="main"></slot>
  <slot name="footer"></slot>
</template>
<style scoped></style>
