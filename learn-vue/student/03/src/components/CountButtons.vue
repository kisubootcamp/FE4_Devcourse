<!-- 자식이 부모의 컴포넌트의 함수를 실행시킬 시점을 emit을 통해 알려주는 구조 (스크립트에는 emits, 템플릿에는 emit으로 사용) -->
<script>
export default {
  name: 'CountButtons',
  data() {
    return {}
  },
  emits: ['reset', 'increment', 'decrement'],
  props: {
    count: {
      type: Number,
    },
  },
}
</script>
<template>
  <button @click="$emit('decrement')">-</button>
  <button @click="$emit('reset')">0</button>
  <button @click="$emit('increment')">+</button>
</template>
<style scoped></style>
