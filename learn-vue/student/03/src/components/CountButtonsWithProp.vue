<!-- 자식컴포넌트가 직접 부모 컴포넌트의 함수를 받아와서 실행시키는 구조 -->
<script>
export default {
  name: 'CountButtonsWithProp',
  inject: ['decrement', 'increment', 'reset', 'incrementByAmount'],
}
</script>
<template>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount(10)">++</button>
</template>
<style scoped></style>
