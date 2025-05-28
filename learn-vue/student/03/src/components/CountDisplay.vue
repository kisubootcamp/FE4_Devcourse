<script>
export default {
  name: 'CountDisplay',
  inject: ['count'],
  computed: {
    currentCount() {
      return this.count()
    },
  },
}
</script>
<template>
  <h1>Count: {{ currentCount }}</h1>
</template>
<style scoped></style>

<!-- //
1. data, computed, methods, + 컴포넌트 생성, props 전달
-->
