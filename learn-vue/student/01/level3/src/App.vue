<script>
export default {
  name: 'App',
  data() {
    return {
      items: ['사과', '바나나', '오렌지'],
      person: { name: '홍길동', age: 25, job: '개발자' },
    }
  },
}
</script>
<template>
  <div v-for="(item, index) in items" :key="index">{{ index }}-{{ item }}</div>
</template>
<style scoped></style>
