<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },
  emits: ['printHello'],
  props: {
    name: {
      type: String,
    },
    print: {
      type: Function,
    },
  },
}
</script>
<template>
  <h1>{{ name }}</h1>
  <!-- 커스텀 이벤트로 함수 전달 받음 -->
  <button @click="$emit('printHello')">자식 버튼</button>
  <!-- props로 함수 전달 받음 -->
  <button @click="print">자식 버튼(props)</button>
</template>
<style scoped></style>
